import {IS_AUTHORIZED, IsUserAction} from "modules/user/userTypes";
import {getToken, validToken} from "services/jwtManager";

export function isAuthorized(): IsUserAction {
    return {
        type: IS_AUTHORIZED,
        payload: validToken(getToken())
    };
}
