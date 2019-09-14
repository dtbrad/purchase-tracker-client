import {BasketsDatePicker, BasketsActionConstants, DidGetBasketsMetadataAction} from "modules/baskets/basketsTypes";

export const initialState: BasketsDatePicker = {
    startDate: undefined,
    endDate: undefined
};

export default function reducer(state = initialState, action: DidGetBasketsMetadataAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_BASKETS_METADATA:
            return {
                startDate: action.payload.startDate,
                endDate: action.payload.endDate
            };
        default:
            return state;
    }
}
