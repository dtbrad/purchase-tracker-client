import {IS_AUTHENTICATED, IsUserAction} from "modules/user/userTypes";
import {getToken, validToken} from "services/jwtManager";

export function isAuthenticated(): IsUserAction {
    return {
        type: IS_AUTHENTICATED,
        payload: validToken(getToken())
    };
}
