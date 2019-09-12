import {LoginActionConstants} from "modules/login/loginTypes";
import {LogoutActionConstants} from "modules/logout/logoutTypes";
import {IS_AUTHORIZED, UserActions} from "modules/user/userTypes";

const initialState = {
    authorized: false
};

export default function reducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case LoginActionConstants.DID_LOGIN:
            return {
                authorized: true
            };
        case IS_AUTHORIZED:
            return {
                authorized: action.payload
            };
        case LogoutActionConstants.DID_LOGOUT:
            return {
                authorized: false
            };
        default:
            return state;
    }
}
