import {BasketsActionConstants, BasketsChart, BasketsChartAction} from "modules/baskets/basketsTypes";
import {LogoutActionConstants} from "modules/logout/logoutTypes";


export const initialState: BasketsChart = {};

export default function reducer(state = initialState, action: BasketsChartAction) {
    switch (action.type) {
        case BasketsActionConstants.DID_GET_BASKETS_CHART:
            return {
                rows: action.payload.rows,
                intervalUnit: action.payload.intervalUnit
            };
        case LogoutActionConstants.DID_LOGOUT:
            return initialState;
        default:
            return state;
    }
}
