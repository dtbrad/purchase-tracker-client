import {BasketsById, GetInitialBasketsAction} from "modules/baskets/basketsTypes";
import {BasketsActionConstants} from "modules/baskets/basketsTypes";

export const initialState: BasketsById = {};

export default function reducer(state = initialState, action: GetInitialBasketsAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_INITIAL_BASKETS:
            return {
                ...state,
                ...action.payload.baskets
            };
        default:
            return state;
    }


}
