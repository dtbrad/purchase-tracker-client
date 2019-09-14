import {createSelector} from "reselect";
import {selectBaskets} from "modules/rootSelectors";
import {BasketsById} from "./basketsTypes";
import {State} from "modules";

export const selectBasketsDatePicker = createSelector(
    selectBaskets,
    function ({datePicker}) {
        return datePicker;
    }
);

export const selectPickedStartDate = createSelector(
    selectBasketsDatePicker,
    function ({startDate}) {
        return startDate;
    }
);

export const selectPickedEndDate = createSelector(
    selectBasketsDatePicker,
    function ({endDate}) {
        return endDate;
    }
);

export const selectBasketIds = createSelector(
    selectBaskets,
    function ({byId}) {
        return Object.keys(byId);
    }
);

export const selectBasketsMetadata = createSelector(
    selectBaskets,
    function ({metadata}) {
        return metadata;
    }
);

export const selectBasketsById = createSelector(
    selectBaskets,
    function ({byId}) {
        return byId;
    }
);

export function selectBasketRow(state: State, id: string) {
    const baskets: BasketsById = selectBasketsById(state);
    return baskets[id];
}
