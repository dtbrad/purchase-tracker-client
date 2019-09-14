import {
    Basket,
    BasketsById,
    BasketsActionConstants,
    GetBasketsMetadataThunkResult,
    FetchBasketsMetadataResult,
    DidFailToGetBasketsMetadataAction,
    DidGetBasketsMetadataAction,
    DidGetBasketsAction,
    DidFailToGetBasketsAction,
    GetBasketsThunkResult,
    FetchBasketsResult
} from "modules/baskets/basketsTypes";
import {getToken, validToken, returnUserId} from "services/jwtManager";
import fetchBasketsMetadata from "api/fetchBasketsMetadata";
import fetchBaskets from "api/fetchBaskets";
import {logOut} from "modules/logout/logoutActions";
import moment from "moment";
import {selectBasketsMetadata} from "modules/baskets/basketsSelectors";


function reduceBaskets(basketsArr: Basket[]) {
    return basketsArr.reduce(function (target: BasketsById, basket: Basket) {
        target[basket.id] = basket;
        return target;
    }, {});
}

type DidGetBasketsMetadataArgs = {
    totalPages: number;
    startDate: Date;
    endDate: Date;
    intervalUnit: string;
}

export function didGetBasketsMetadata({
    totalPages,
    startDate,
    endDate,
    intervalUnit
}: DidGetBasketsMetadataArgs): DidGetBasketsMetadataAction {
    return {
        type: BasketsActionConstants.DID_GET_BASKETS_METADATA,
        payload: {
            page: 1,
            order: "desc",
            orderBy: "date",
            totalPages,
            startDate,
            endDate,
            intervalUnit
        }
    };
}

export function didFailToGetBasketsMetadata(): DidFailToGetBasketsMetadataAction {
    return {
        type: BasketsActionConstants.DID_FAIL_TO_GET_BASKETS_METADATA
    };
}

type DidGetBasketsArgs = {
    byId: BasketsById;
    metadata: any
}
export function didGetBaskets(payload: DidGetBasketsArgs): DidGetBasketsAction {
    return {
        type: BasketsActionConstants.DID_GET_BASKETS,
        payload
    };
}

export function didFailToGetBaskets(): DidFailToGetBasketsAction {
    return {
        type: BasketsActionConstants.DID_FAIL_TO_GET_BASKETS
    };
}

function computeUnit(startDate: Date, endDate: Date) {
    const range = moment(endDate).diff(moment(startDate), "days");
    if (range > 90) {
        return "month";
    }
    if (range > 14 && range <= 90) {
        return "week";
    }
    return "day";
}

export function getBasketsMetadata(): GetBasketsMetadataThunkResult<FetchBasketsMetadataResult> {
    return async function (dispatch) {
        const token = getToken();
        if (typeof token === "string" && validToken(token)) {
            const userId = returnUserId(token);

            try {
                const {startDate, endDate, totalPages} = userId && await fetchBasketsMetadata({userId}, token);
                const intervalUnit = computeUnit(startDate, endDate);

                return dispatch(didGetBasketsMetadata({totalPages, startDate, endDate, intervalUnit}));
            } catch (error) {
                console.log(error);
                return dispatch(didFailToGetBasketsMetadata());
            }
        }

        return dispatch(logOut());
    };
}


type getBasketsArgs = {
    category?: string;
}

export function getBaskets({category}: getBasketsArgs): GetBasketsThunkResult<FetchBasketsResult> {
    return async function (dispatch, getState) {
        const token = getToken();
        if (typeof token === "string" && validToken(token)) {
            const userId = returnUserId(token);
            const {order, orderBy, startDate, endDate} = selectBasketsMetadata(getState());
            let computedOrder = order;

            if (category) {
                computedOrder = order === "desc" && orderBy === category
                    ? "asc"
                    : "desc";
            }

            try {
                const {baskets, metadata} = userId && startDate && endDate &&
                    await fetchBaskets({userId, startDate, endDate, order: computedOrder, orderBy: category}, token);

                return dispatch(didGetBaskets({
                    byId: reduceBaskets(baskets),
                    metadata
                }));

            } catch (error) {
                return dispatch(didFailToGetBaskets());
            }
        }
        return dispatch(logOut());
    };
}

