import {State} from "modules";

export function selectUser(state: State) {
    return state.user;
}
