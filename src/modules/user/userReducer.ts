import {LoginActionConstants} from "modules/login/loginTypes";

const initialState = {
    authorized: false
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case LoginActionConstants.DID_LOGIN:
            return {
                authorized: true
            };
        case LoginActionConstants.DID_LOGOUT:
            return {
                authorized: false
            };
        default:
            return state;
    }
}
