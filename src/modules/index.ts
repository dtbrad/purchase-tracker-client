import {combineReducers} from "redux";
import user from "modules/user/userReducer";

export type State = {
    user: {
        authorized: boolean
    };
};

const reducer = combineReducers({
    user
});

export default reducer;
