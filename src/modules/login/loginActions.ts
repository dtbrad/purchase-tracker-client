import {
    DID_LOGIN,
    LoginCredentials
} from "modules/login/loginTypes";

export function didLogin() {
    return {
        type: DID_LOGIN
    };
}

export function login(credentials: LoginCredentials) {
    console.log(credentials);
    return didLogin();
}
