import {ThunkAction} from "redux-thunk";
import {AppState} from "modules";

export enum LogoutActionConstants {
    DID_LOGOUT = "DID_LOGOUT"
}

export type DidLogoutAction = {
    type: typeof LogoutActionConstants.DID_LOGOUT;
}

export type DidLogoutThunkResult<R> = ThunkAction<R, AppState, undefined, DidLogoutAction>;

export type DidLogoutResult = Promise<DidLogoutAction>;
