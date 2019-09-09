export enum LoginActionConstants {
    WILL_LOGIN = "WILL_LOGIN",
    DID_LOGIN = "DID_LOGIN",
    DID_FAIL_TO_LOGIN = "DID_FAIL_TO_LOGIN",
    DID_LOGOUT = "DID_LOGOUT",
}

export const STATUS = {
    IDLE: "IDLE",
    PENDING: "PENDING",
    FAILED: "FAILED"
};

export type LoginCredentials = {
    email: string;
    password: string;
};

export type LoginAction = {
    type: typeof LoginActionConstants.DID_LOGIN;
    payload: string;
};

export type WillLoginAction = {
    type: typeof LoginActionConstants.WILL_LOGIN;
    payload: string;
};

export type LogoutAction = {
    type: typeof LoginActionConstants.DID_LOGOUT;
    payload: string;
};

export type FailedToLoginAction = {
    type: typeof LoginActionConstants.DID_FAIL_TO_LOGIN;
    payload: string;
};

export type LoginActions =
    | LoginAction
    | WillLoginAction
    | LogoutAction
    | FailedToLoginAction;
