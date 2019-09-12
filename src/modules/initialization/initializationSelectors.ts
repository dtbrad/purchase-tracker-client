import {selectInitialization} from "modules/rootSelectors";
import {createSelector} from "reselect";

export const selectIsInitialized = createSelector(
    selectInitialization,
    ({initialized}) => initialized
);
