import {ThunkAction} from "redux-thunk";
import {AppState} from "modules";
import {DidLogoutAction} from "modules/logout/logoutTypes";

// domain -----------------------------------------------------------

export type BasketsMetadata = {
    order?: string;
    orderBy?: string;
    page?: number;
    endDate?: Date;
    startDate?: Date;
    totalPages?: number;
    intervalUnit?: string
}

export type Basket = {
    id: string;
    items: number;
    purchaseDate: string;
    total: number;
};

export type BasketsById = {
    [id: string]: Basket;
};

export type Row = {
    interval: string;
    total: number
};

export type BasketsChart = Row[];

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

// action creators ---------------------------------------------------

export enum BasketsActionConstants {
    DID_GET_BASKETS_METADATA = "DID_GET_BASKETS_METADATA",
    DID_FAIL_TO_GET_BASKETS_METADATA = "DID_FAIL_TO_GET_BASKETS_METADATA",
    DID_GET_INITIAL_BASKETS = "DID_GET_INITIAL_BASKETS",
    DID_FAIL_TO_GET_INITIAL_BASKETS = "DID_FAIL_TO_GET_INITIAL_BASKETS",
    DID_GET_SORTED_BASKETS = "DID_GET_SORTED_BASKETS",
    DID_FAIL_TO_GET_SORTED_BASKETS = "DID_FAIL_TO_GET_SORTED_BASKETS"
}

// ---------------------------------- for fetching basketsMetadata
export type DidGetBasketsMetadataPayload = {
    order: string;
    orderBy: string;
    totalPages: number;
    startDate: Date;
    endDate: Date
    intervalUnit: string;
}

export type DidGetBasketsMetadataAction = {
    type: typeof BasketsActionConstants.DID_GET_BASKETS_METADATA;
    payload: BasketsMetadata;
}

export type DidFailToGetBasketsMetadataAction = {
    type: typeof BasketsActionConstants.DID_FAIL_TO_GET_BASKETS_METADATA;
}

export type GetBasketsMetadataAction =
    | DidGetBasketsMetadataAction
    | DidFailToGetBasketsMetadataAction;

export type GetBasketsMetadataThunkResult<R> = ThunkAction<
    R, AppState, undefined, GetBasketsMetadataAction | DidLogoutAction
>;

export type FetchBasketsMetadataResult = Promise<GetBasketsMetadataAction | DidLogoutAction>

// ---------------------------------- for fetching initial baskets


export type DidGetInitialBasketsPayload = {
    byId: BasketsById;
    metadata: BasketsMetadata;
}
export type DidGetInitialBasketsAction = {
    type: typeof BasketsActionConstants.DID_GET_INITIAL_BASKETS;
    payload: DidGetInitialBasketsPayload;
}

export type DidFailToGetInitialBasketsAction = {
    type: typeof BasketsActionConstants.DID_FAIL_TO_GET_INITIAL_BASKETS
}

export type GetInitialBasketsAction = DidGetInitialBasketsAction | DidFailToGetInitialBasketsAction;

export type GetInitialBasketsThunkResult<R> = ThunkAction<
    R, AppState, undefined, GetInitialBasketsAction | DidLogoutAction
>;

export type FetchInitialBasketsResult = Promise<GetInitialBasketsAction | DidLogoutAction>


// ---------------------------------- for fetching sorted baskets

export type DidGetSortedBasketsPayload = {
    byId: BasketsById;
    metadata: BasketsMetadata ;
}

export type DidGetSortedBasketsAction = {
    type: typeof BasketsActionConstants.DID_GET_SORTED_BASKETS;
    payload: DidGetSortedBasketsPayload
}

export type DidFailToGetSortedBasketsAction = {
    type: typeof BasketsActionConstants.DID_FAIL_TO_GET_SORTED_BASKETS
}

export type GetSortedBasketsAction = DidGetSortedBasketsAction | DidFailToGetSortedBasketsAction;

export type GetSortedBasketsThunkResult<R> = ThunkAction<
    R, AppState, undefined, GetSortedBasketsAction | DidLogoutAction
>;

export type FetchSortedBasketsResult = Promise<GetSortedBasketsAction | DidLogoutAction>
