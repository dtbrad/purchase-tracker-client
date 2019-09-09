import {ThunkAction} from "redux-thunk";
import {
    WILL_LOGIN,
    DID_LOGIN,
    DID_FAIL_TO_LOGIN,
    DID_LOGOUT,
    LoginCredentials
} from "modules/login/loginTypes";
import submitLogin from "api/submitLogin";
import {setToken, removeToken} from "services/jwtManager";


export function willLogin() {
    return {
        type: WILL_LOGIN
    };
}

export function didLogin() {
    return {
        type: DID_LOGIN
    };
}

export function didFailToLogin() {
    return {
        type: DID_FAIL_TO_LOGIN
    };
}

export function didLogOut() {
    return {
        type: DID_LOGOUT
    };
}

export function login(credentials: LoginCredentials): ThunkAction<void, any, null, any> {
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

export function logOut(): ThunkAction<void, any, null, any> {
    return async function (dispatch) {
        await removeToken();
        return dispatch(didLogOut());
    };
}
