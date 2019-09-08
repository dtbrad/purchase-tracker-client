import {createSelector} from "reselect";
import {selectUser} from "modules/rootSelectors";

export const selectIsUserAuthorized = createSelector(
    selectUser,
    ({authorized}) => authorized
);
