import {combineReducers} from "redux";
import login from "modules/login/loginReducer";
import user from "modules/user/userReducer";
import initialization from "modules/initialization/initializationReducer";
import baskets from "modules/baskets/basketsReducer";
import {LoginState} from "modules/login/loginTypes";
import {UserState} from "modules/user/userTypes";
import {InitializationState} from "modules/initialization/initializationTypes";
import {BasketsState} from "modules/baskets/basketsTypes";

export type State = {
    user: UserState;
    initialization: InitializationState;
    login: LoginState;
    baskets: BasketsState;
};

const reducer = combineReducers({
    login,
    user,
    initialization,
    baskets
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
