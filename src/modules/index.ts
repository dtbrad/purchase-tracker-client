import {combineReducers} from "redux";
import login from "modules/login/loginReducer";
import user from "modules/user/userReducer";
import baskets from "modules/baskets/basketsReducer";
import initialization from "modules/initialization/initializationReducer";
import {LoginState} from "modules/login/loginTypes";
import {UserState} from "modules/user/userTypes";
import {BasketsState} from "modules/baskets/basketsTypes";
import {InitializationState} from "modules/initialization/initializationTypes";

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

export default reducer;

export type AppState = ReturnType<typeof reducer>;
