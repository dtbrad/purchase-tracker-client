import {combineReducers} from "redux";
import login from "modules/login/loginReducer";
import user from "modules/user/userReducer";
import baskets from "modules/baskets/basketsReducer";
import initialization from "modules/initialization/initializationReducer";
import {LoginState} from "modules/login/loginTypes";
import {UserState} from "modules/user/userTypes";
import {BasketsState} from "modules/baskets/basketsTypes";
import {InitializationState} from "modules/initialization/initializationTypes";
import {LogoutActionConstants} from "./logout/logoutTypes";

export type State = {
    user: UserState;
    login: LoginState;
    baskets: BasketsState;
    initialization: InitializationState;
};

const reducer = combineReducers({
    login,
    initialization,
    user,
    baskets
});

// reset all state nodes other than initialization on logout
function rootReducer(state: any, action: any) {
    if (action.type === LogoutActionConstants.DID_LOGOUT) {
        state = {initialization: {initialized: true}};
    }

    return reducer(state, action);
};

export default rootReducer;


export type AppState = ReturnType<typeof reducer>;
