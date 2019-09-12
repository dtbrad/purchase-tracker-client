import {DID_INITIALIZE_APP, InitializationAction} from "modules/initialization/initializationTypes";

const initialState = {
    initialized: false
};

export default function reducer(state = initialState, action: InitializationAction) {
    switch (action.type) {
        case DID_INITIALIZE_APP:
            return {
                initialized: true
            };
        default:
            return state;
    }
}
