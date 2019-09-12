import {ThunkAction} from "redux-thunk";
import {AppState} from "modules";
import {LogoutAction} from "modules/logout/logoutTypes";

export type BasketsMetadata = {
    order?: string;
    orderBy?: string;
    page?: number;
    endDate?: Date;
    startDate?: Date;
    totalPages?: number;
    unit?: string
}

export type Basket = {
    id: string;
    items: number;
    purchaseDate: string;
    total: number;
};

export type BasketsMap = {
    [id: string]: Basket;
};

export type BasketsById = {
    [id: string]: Basket;
};

export type Row = {
    interval: string;
    total: number
};

export type BasketsChart = {
    intervalUnit?: string;
    rows?: Row[]
}

export type BasketsDatePicker = {
    startDate?: Date;
    endDate?: Date;
};

export type BasketsState = {
    byId: BasketsById;
    metadata: BasketsMetadata;
    datePicker: BasketsDatePicker;
    chart: BasketsChart;
}

export enum BasketsActionConstants {
    DID_GET_INITIAL_BASKETS = "DID_GET_INITIAL_BASKETS",
    DID_FAIL_TO_FETCH_BASKETS = "DID_FAIL_TO_FETCH_BASKETS",
    DID_GET_BASKETS_CHART = "DID_GET_BASKETS_CHART",
    DID_FAIL_TO_FETCH_BASKETS_CHART = "DID_FAIL_TO_FETCH_BASKETS_CHART"
}

export type BasketsActionPayload = {
    byId: BasketsById;
    metadata: BasketsMetadata;
};

export type DidGetBasketsChartAction = {
    type: typeof BasketsActionConstants.DID_GET_BASKETS_CHART;
    payload: BasketChartsActionPayload
}

export type BasketChartsActionPayload = {
    intervalUnit: string;
    rows: Row[];
}

export type InitialBasketsActionPayload = BasketsActionPayload & {
    datePicker: BasketsDatePicker;
}

export type DidGetInitialBasketsAction = {
    type: typeof BasketsActionConstants.DID_GET_INITIAL_BASKETS;
    payload: InitialBasketsActionPayload;
}

export type DidFailToFetchBasketsAction = {
    type: typeof BasketsActionConstants.DID_FAIL_TO_FETCH_BASKETS;
}

export type DidFailToFetchBasketsChartAction = {
    type: typeof BasketsActionConstants.DID_FAIL_TO_FETCH_BASKETS_CHART
}

export type BasketsAction =
    | DidGetInitialBasketsAction
    | DidFailToFetchBasketsAction
    | LogoutAction

export type BasketsThunkResult<R> = ThunkAction<R, AppState, undefined, BasketsAction>;

export type FetchBasketsResult = Promise<DidGetInitialBasketsAction | DidFailToFetchBasketsAction | LogoutAction>;

export type BasketsChartAction =
    | DidGetBasketsChartAction
    | DidFailToFetchBasketsChartAction
    | LogoutAction

export type BasketsChartThunkResult<R> = ThunkAction<R, AppState, undefined, BasketsChartAction>;

export type FetchBasketsChartResult =Promise<
    DidGetBasketsChartAction | DidFailToFetchBasketsChartAction | LogoutAction
>;
