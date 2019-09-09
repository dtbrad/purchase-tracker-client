import {combineReducers} from "redux";
import login from "modules/login/loginReducer";
import user from "modules/user/userReducer";
import {LoginState} from "modules/login/loginTypes";
import {UserState} from "modules/user/userTypes";

export type State = {
    user: UserState;
    login: LoginState
};

const reducer = combineReducers({
    login,
    user
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
