export type UserState = {
    authorized: boolean
}

export const IS_AUTHORIZED = "IS_AUTHORIZED";

export type IsUserAction = {
    type: string;
    payload: boolean;
};

export type UserActions = IsUserAction;
