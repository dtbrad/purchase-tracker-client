import {ThunkAction} from "redux-thunk";
import {AppState} from "modules";

export enum LogoutActionConstants {
    DID_LOGOUT = "DID_LOGOUT"
}

export type LogoutAction = {
    type: typeof LogoutActionConstants.DID_LOGOUT;
}

export type LogoutThunkResult<R> = ThunkAction<R, AppState, undefined, LogoutAction>;

export type LogoutResult = Promise<LogoutAction>;
