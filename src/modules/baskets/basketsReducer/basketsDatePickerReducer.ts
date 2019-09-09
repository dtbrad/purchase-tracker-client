import {BasketsDatePicker, BasketsActionConstants, BasketsAction} from "modules/baskets/basketsTypes";
import {LogoutActionConstants} from "modules/logout/logoutTypes";

export const initialState: BasketsDatePicker = {
    startDate: undefined,
    endDate: undefined
};

export default function reducer(state = initialState, action: BasketsAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_INITIAL_BASKETS:
            return action.payload.datePicker;
        case LogoutActionConstants.DID_LOGOUT:
            return initialState;
        default:
            return state;
    }
}
