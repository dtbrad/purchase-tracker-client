export type UserState = {
    authenticated: boolean
}

export const IS_AUTHENTICATED = "IS_AUTHENTICATED";

export type IsUserAction = {
    type: string;
    payload: boolean;
};

export type UserActions = IsUserAction;

