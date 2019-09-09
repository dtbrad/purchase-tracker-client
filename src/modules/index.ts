import {combineReducers} from "redux";
import login from "modules/login/loginReducer";
import user from "modules/user/userReducer";
import baskets from "modules/baskets/basketsReducer";
import {LoginState} from "modules/login/loginTypes";
import {UserState} from "modules/user/userTypes";
import {BasketsState} from "modules/baskets/basketsTypes";

export type State = {
    user: UserState;
    login: LoginState;
    baskets: BasketsState;
};

const reducer = combineReducers({
    login,
    user,
    baskets
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
