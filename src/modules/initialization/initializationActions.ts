import {
    DID_INITIALIZE_APP,
    InitializationAction
} from "modules/initialization/initializationTypes";
import {isAuthorized} from "modules/user/userActions";
import {getInitialBaskets} from "modules/baskets/basketsActions";
import {selectIsUserAuthorized} from "modules/user/userSelectors";
import {ThunkAction} from "redux-thunk";
import {getBasketsChart} from "modules/baskets/basketsActions";

export function didInitializeApp(): InitializationAction {
    return {
        type: DID_INITIALIZE_APP
    };
}

export function initializeApp(): ThunkAction<void, any, null, any> {
    return async function (dispatch, getState) {
        await dispatch(isAuthorized());
        if (selectIsUserAuthorized(getState())) {
            await dispatch(getInitialBaskets());
            await dispatch(getBasketsChart());
        }
        return dispatch({type: DID_INITIALIZE_APP});
    };
}
