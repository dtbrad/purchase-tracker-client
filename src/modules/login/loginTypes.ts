import {ThunkAction} from "redux-thunk";
import {AppState} from "modules";

export type LoginState = {
    status: string
}

export enum LoginActionConstants {
    WILL_LOGIN = "WILL_LOGIN",
    DID_LOGIN = "DID_LOGIN",
    DID_FAIL_TO_LOGIN = "DID_FAIL_TO_LOGIN"
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

export type DidLoginAction = {
    type: typeof LoginActionConstants.DID_LOGIN;
    payload: string;
};

export type WillLoginAction = {
    type: typeof LoginActionConstants.WILL_LOGIN;
    payload: string;
};

export type DidFailToLoginAction = {
    type: typeof LoginActionConstants.DID_FAIL_TO_LOGIN;
    payload: string;
};

export type LoginAction =
    | DidLoginAction
    | WillLoginAction
    | DidFailToLoginAction;

export type LoginThunkResult<R> = ThunkAction<R, AppState, undefined, LoginAction>;

export type SubmitLoginResult = Promise<DidLoginAction | DidFailToLoginAction>;
