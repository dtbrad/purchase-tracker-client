import {
    LoginActionConstants,
    STATUS,
    LoginAction,
    LoginState
} from "./loginTypes";

export const initialState: LoginState = {
    status: STATUS.IDLE
};

export default function reducer(state = initialState, action: LoginAction) {
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
