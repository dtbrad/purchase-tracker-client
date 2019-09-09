export enum LogoutActionConstants {
    DID_LOGOUT = "DID_LOGOUT"
}

export type LogoutAction = {
    type: typeof LogoutActionConstants.DID_LOGOUT;
}
