import {LogoutActionConstants, LogoutAction} from "modules/logout/logoutTypes";
import {ThunkAction} from "redux-thunk";
import {removeToken} from "services/jwtManager";
import {AppState} from "modules";

export function didLogOut() {
    return {
        type: LogoutActionConstants.DID_LOGOUT
    };
}

export function logOut(): ThunkAction<void, AppState, null, LogoutAction> {
    return function (dispatch) {
        removeToken();
        return dispatch(didLogOut());
    };
}
