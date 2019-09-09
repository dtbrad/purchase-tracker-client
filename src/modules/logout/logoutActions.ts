import {LogoutActionConstants, LogoutThunkResult, LogoutResult} from "modules/logout/logoutTypes";
import {removeToken} from "services/jwtManager";

export function didLogOut() {
    return {
        type: LogoutActionConstants.DID_LOGOUT
    };
}

export function logOut(): LogoutThunkResult<LogoutResult> {
    return async function (dispatch) {
        await removeToken();
        return dispatch(didLogOut());
    };
}
