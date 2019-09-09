import {
    LoginActionConstants,
    STATUS,
    LoginActions,
    LoginCredentials
} from "modules/login/loginTypes";
import submitLogin from "api/submitLogin";
import {setToken, removeToken} from "services/jwtManager";
import {ThunkAction} from "redux-thunk";
import {AppState} from "modules";

export function willLogin() {
    return {
        type: LoginActionConstants.WILL_LOGIN,
        payload: STATUS.PENDING
    };
}

export function didLogin() {
    return {
        type: LoginActionConstants.DID_LOGIN,
        payload: STATUS.IDLE
    };
}

export function didFailToLogin() {
    return {
        type: LoginActionConstants.DID_FAIL_TO_LOGIN,
        payload: STATUS.FAILED
    };
}

export function didLogOut() {
    return {
        type: LoginActionConstants.DID_LOGOUT,
        payload: STATUS.IDLE
    };
}

export function login(credentials: LoginCredentials): ThunkAction<void, AppState, null, LoginActions> {
    return async function (dispatch) {
        dispatch(willLogin());

        let response;

        try {
            response = await submitLogin(credentials);
            setToken(response.data.login.token);
            return dispatch(didLogin());
        } catch (error) {
            console.log(error);
        }

        return dispatch(didFailToLogin());
    };
}

export function logOut(): ThunkAction<void, AppState, null, LoginActions> {
    return async function (dispatch) {
        await removeToken();
        return dispatch(didLogOut());
    };
}
