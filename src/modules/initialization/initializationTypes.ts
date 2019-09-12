export const DID_INITIALIZE_APP = "DID_INITIALIZE_APP";

export type InitializationAction = {
    type: string;
};

export type InitializationActions = InitializationAction;

export type InitializationState = {
    initialized: boolean;
}
