import {createSelector} from "reselect";
import {selectUser} from "modules/rootSelectors";

export const selectIsUserAuthenticated = createSelector(
    selectUser,
    ({authenticated}) => authenticated
);
