import {combineReducers} from "redux";
import login from "modules/login/loginReducer";
import user from "modules/user/userReducer";

export type State = {
    user: {
        authorized: boolean
    };
    login: {
        status: string
    }
};

const reducer = combineReducers({
    login,
    user
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
