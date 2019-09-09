import {BasketsDatePicker} from "modules/baskets/basketsTypes";

export const initialState: BasketsDatePicker = {
    startDate: undefined,
    endDate: undefined
};

export default function reducer(state = initialState) {
    return state;
}
