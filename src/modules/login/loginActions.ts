import {
    LoginActionConstants,
    STATUS,
    LoginCredentials,
    WillLoginAction,
    DidLoginAction,
    DidFailToLoginAction,
    LoginThunkResult,
    SubmitLoginResult
} from "modules/login/loginTypes";
import {getBasketsMetadata} from "modules/baskets/basketsActions";
import submitLogin from "api/submitLogin";
import {setToken} from "services/jwtManager";

export function willLogin(): WillLoginAction {
    return {
        type: LoginActionConstants.WILL_LOGIN,
        payload: STATUS.PENDING
    };
}

export function didLogin(): DidLoginAction {
    return {
        type: LoginActionConstants.DID_LOGIN,
        payload: STATUS.IDLE
    };
}

export function didFailToLogin(): DidFailToLoginAction {
    return {
        type: LoginActionConstants.DID_FAIL_TO_LOGIN,
        payload: STATUS.FAILED
    };
}

export function login(credentials: LoginCredentials): LoginThunkResult<SubmitLoginResult> {
    return async function (dispatch) {
        dispatch(willLogin());

        let response;

        try {
            response = await submitLogin(credentials);
            setToken(response.data.login.token);
            await dispatch(getBasketsMetadata());
            return dispatch(didLogin());
        } catch (error) {
            console.log(error);
        }

        return dispatch(didFailToLogin());
    };
}
