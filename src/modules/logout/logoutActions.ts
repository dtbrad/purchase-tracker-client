import {LogoutActionConstants, DidLogoutThunkResult, DidLogoutResult} from "modules/logout/logoutTypes";
import {removeToken} from "services/jwtManager";

export function didLogOut() {
    return {
        type: LogoutActionConstants.DID_LOGOUT
    };
}

export function logOut(): DidLogoutThunkResult<DidLogoutResult> {
    return async function (dispatch) {
        await removeToken();
        return dispatch(didLogOut());
    };
}
