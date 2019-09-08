import {
    DID_LOGIN,
    DID_LOGOUT,
    LoginCredentials
} from "modules/login/loginTypes";

export function didLogin() {
    return {
        type: DID_LOGIN
    };
}

export function didLogOut() {
    return {
        type: DID_LOGOUT
    };
}

export function login(credentials: LoginCredentials) {
    console.log(credentials);
    return didLogin();
}

export function logOut() {
    return didLogOut();
}
