import {BasketsById, GetBasketsAction} from "modules/baskets/basketsTypes";
import {BasketsActionConstants} from "modules/baskets/basketsTypes";

export const initialState: BasketsById = {};

export default function reducer(state = initialState, action: GetBasketsAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_BASKETS:
            return action.payload.byId;
        default:
            return state;
    }
}
