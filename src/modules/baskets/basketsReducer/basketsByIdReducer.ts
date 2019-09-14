import {BasketsById, GetInitialBasketsAction, GetSortedBasketsAction} from "modules/baskets/basketsTypes";
import {BasketsActionConstants} from "modules/baskets/basketsTypes";

export const initialState: BasketsById = {};

export default function reducer(state = initialState, action: GetInitialBasketsAction | GetSortedBasketsAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_INITIAL_BASKETS:
        case BasketsActionConstants.DID_GET_SORTED_BASKETS:
            return action.payload.byId;
        default:
            return state;
    }


}
