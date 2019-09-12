import {State} from "modules";

export function selectUser(state: State) {
    return state.user;
}

export function selectLogin(state: State) {
    return state.login;
}

export function selectBaskets(state: State) {
    return state.baskets;
}
