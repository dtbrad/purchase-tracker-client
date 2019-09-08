import {DID_LOGIN, DID_LOGOUT} from "modules/login/loginTypes";

const initialState = {
    authorized: false
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case DID_LOGIN:
            return {
                authorized: true
            };
        case DID_LOGOUT:
            return {
                authorized: false
            };
        default:
            return state;
    }
}
