import {createSelector} from "reselect";
import {selectBaskets} from "modules/rootSelectors";

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
