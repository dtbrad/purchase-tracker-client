import {
    DID_INITIALIZE_APP,
    InitializationAction
} from "modules/initialization/initializationTypes";
import {isAuthenticated} from "modules/user/userActions";
import {getBasketsMetadata} from "modules/baskets/basketsActions";
import {selectIsUserAuthenticated} from "modules/user/userSelectors";
import {ThunkAction} from "redux-thunk";


export function didInitializeApp(): InitializationAction {
    return {
        type: DID_INITIALIZE_APP
    };
}

export function initializeApp(): ThunkAction<void, any, null, any> {
    return async function (dispatch, getState) {
        await dispatch(isAuthenticated());
        if (selectIsUserAuthenticated(getState())) {
            await dispatch(getBasketsMetadata());
        }
        return dispatch({type: DID_INITIALIZE_APP});
    };
}
