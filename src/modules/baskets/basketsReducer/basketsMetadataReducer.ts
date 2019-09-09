import {BasketsMetadata, BasketsActionConstants, BasketsAction} from "modules/baskets/basketsTypes";

export const initialState: BasketsMetadata = {};


export default function reducer(state = initialState, action: BasketsAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_INITIAL_BASKETS:
            return action.payload.metadata;
        default:
            return state;
    }
}
