import {BasketsMetadata, BasketsActionConstants, GetBasketsMetadataAction} from "modules/baskets/basketsTypes";
import {DidLogoutAction} from "modules/logout/logoutTypes";

export const initialState: BasketsMetadata = {};


export default function reducer(state = initialState, action: GetBasketsMetadataAction | DidLogoutAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_BASKETS_METADATA:
            return action.payload;
        case BasketsActionConstants.DID_FAIL_TO_GET_BASKETS_METADATA:
        default:
            return state;
    }
}
