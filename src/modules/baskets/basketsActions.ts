import {getToken, validToken, returnUserId} from "services/jwtManager";
import fetchBasketsChart from "api/fetchBasketsChart";
import {
    Basket,
    BasketsActionConstants,
    BasketsById,
    InitialBasketsActionPayload,
    DidGetInitialBasketsAction,
    DidFailToFetchBasketsAction,
    BasketsThunkResult,
    FetchBasketsResult,
    BasketChartsActionPayload,
    DidGetBasketsChartAction,
    DidFailToFetchBasketsChartAction,
    BasketsChartThunkResult,
    FetchBasketsChartResult
} from "modules/baskets/basketsTypes";
import {
    selectPickedStartDate,
    selectPickedEndDate
} from "modules/baskets/basketsSelectors";
import {logOut} from "modules/logout/logoutActions";
import fetchBaskets from "../../api/fetchBaskets";
import moment from "moment";

function reduceBaskets(basketsArr: Basket[]) {
    return basketsArr.reduce(function (target: BasketsById, basket: Basket) {
        target[basket.id] = basket;
        return target;
    }, {});
}

function didGetInitialBaskets(payload: InitialBasketsActionPayload): DidGetInitialBasketsAction {
    return {
        type: BasketsActionConstants.DID_GET_INITIAL_BASKETS,
        payload
    };
}

function didFailToFetchBaskets(): DidFailToFetchBasketsAction {
    return {
        type: BasketsActionConstants.DID_FAIL_TO_FETCH_BASKETS
    };
}

export function didGetBasketsChart(payload: BasketChartsActionPayload): DidGetBasketsChartAction {
    // console.log("inside didGetBasketsChart");
    return {
        type: BasketsActionConstants.DID_GET_BASKETS_CHART,
        payload
    };
}

function didFailToFetchBasketsChart(): DidFailToFetchBasketsChartAction {
    return {
        type: BasketsActionConstants.DID_FAIL_TO_FETCH_BASKETS_CHART
    };
}

export function getInitialBaskets(): BasketsThunkResult<FetchBasketsResult> {
    return async function (dispatch) {
        const token = getToken();
        if (typeof token === "string" && validToken(token)) {
            const userId = returnUserId(token);
            try {
                const {rows, metadata} = await fetchBaskets({userId}, token);

                return dispatch(didGetInitialBaskets({
                    byId: reduceBaskets(rows),
                    metadata: {
                        order: "desc",
                        orderBy: "date",
                        startDate: new Date(metadata.startDate),
                        endDate: new Date(metadata.endDate),
                        totalPages: metadata.totalPages,
                        page: metadata.page
                    },
                    datePicker: {
                        startDate: new Date(metadata.startDate),
                        endDate: new Date(metadata.endDate)
                    }
                }));
            } catch {
                return dispatch(didFailToFetchBaskets());
            }

        }
        return dispatch(logOut());
    };
}

function computeUnit(startDate: Date | undefined, endDate: Date | undefined) {
    const range = moment(endDate).diff(moment(startDate), "days");
    if (range > 90) {
        return "month";
    }
    if (range > 14 && range <= 90) {
        return "week";
    }
    return "day";
}

export function getBasketsChart(unit?: string): BasketsChartThunkResult<FetchBasketsChartResult> {
    return async function (dispatch, getState) {
        const token = getToken();
        if (typeof token === "string" && validToken(token)) {
            const userId = returnUserId(token);
            const startDate = selectPickedStartDate(getState());
            const endDate = selectPickedEndDate(getState());
            const computedUnit = unit || computeUnit(startDate, endDate) || "month";
            try {
                const response = await fetchBasketsChart({userId, startDate, endDate, unit: computedUnit}, token);

                const payload = {
                    rows: response,
                    intervalUnit: computedUnit
                };

                return dispatch(didGetBasketsChart(payload));
            } catch (error) {
                console.log(error);
                return dispatch(didFailToFetchBasketsChart());
            }
        }
        return dispatch(logOut());
    };
}
