import {createSelector} from "reselect";
import {selectLogin} from "modules/rootSelectors";

export const selectLoginStatus = createSelector(
    selectLogin,
    ({status}) => status
);
