import {
    LoginActionConstants,
    STATUS,
    LoginActions
} from "./loginTypes";

export const initialState = {
    status: STATUS.IDLE
};

export default function reducer(state = initialState, action: LoginActions) {
    switch (action.type) {
        case LoginActionConstants.WILL_LOGIN:
            return {
                ...state,
                status: action.payload
            };
        case LoginActionConstants.DID_LOGIN:
            return {
                ...state,
                status: action.payload
            };
        case LoginActionConstants.DID_FAIL_TO_LOGIN:
            return {
                ...state,
                status: action.payload
            };

        default:
            return state;
    }
}
