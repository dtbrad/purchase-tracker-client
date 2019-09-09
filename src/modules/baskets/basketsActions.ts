import {BasketsActionConstants} from "modules/baskets/basketsTypes";
import {getToken, validToken, returnUserId} from "services/jwtManager";
import {Basket, BasketsById, InitialBasketsActionPayload, DidGetInitialBasketsAction, DidFailToFetchBasketsAction, BasketsThunkResult, FetchBasketsResult} from "modules/baskets/basketsTypes";
import {logOut} from "modules/logout/logoutActions";
import fetchBaskets from "../../api/fetchBaskets";

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
