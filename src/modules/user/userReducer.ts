import {LoginActionConstants} from "modules/login/loginTypes";
import {LogoutActionConstants} from "modules/logout/logoutTypes";
import {IS_AUTHENTICATED, UserActions} from "modules/user/userTypes";

const initialState = {
    authenticated: false
};

export default function reducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case LoginActionConstants.DID_LOGIN:
            return {
                authenticated: true
            };
        case IS_AUTHENTICATED:
            return {
                authenticated: action.payload
            };
        case LogoutActionConstants.DID_LOGOUT:
            return {
                authenticated: false
            };
        default:
            return state;
    }
}
