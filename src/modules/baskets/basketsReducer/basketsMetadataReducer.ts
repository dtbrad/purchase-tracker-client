import {BasketsMetadata, BasketsActionConstants, GetBasketsMetadataAction, GetBasketsAction, DidGetBasketsAction} from "modules/baskets/basketsTypes";
import {DidLogoutAction} from "modules/logout/logoutTypes";

export const initialState: BasketsMetadata = {};


export default function reducer(
    state = initialState,
    action: GetBasketsMetadataAction | GetBasketsAction | DidGetBasketsAction | DidLogoutAction
) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_BASKETS_METADATA:
            return action.payload;
        case BasketsActionConstants.DID_GET_BASKETS:
            return {
                ...state,
                ...action.payload.metadata
            };
        default:
            return state;
    }
}
