import {
    BasketsActionConstants,
    GetBasketsMetadataThunkResult,
    FetchBasketsMetadataResult,
    DidFailToGetBasketsMetadataAction,
    DidGetBasketsMetadataAction,
    DidGetInitialBasketsAction,
    DidFailToGetInitialBasketsAction,
    GetInitialBasketsThunkResult,
    FetchInitialBasketsResult
} from "modules/baskets/basketsTypes";
import {getToken, validToken, returnUserId} from "services/jwtManager";
import fetchBasketsMetadata from "api/fetchBasketsMetadata";
import fetchBaskets from "api/fetchBaskets";
import {logOut} from "modules/logout/logoutActions";
import moment from "moment";
import {selectPickedEndDate, selectPickedStartDate} from "modules/baskets/basketsSelectors";


type DidGetBasketsMetadataArgs = {
    totalPages: number;
    startDate: Date;
    endDate: Date;
    intervalUnit: string;
}

export function didGetBasketsMetadata({
    totalPages,
    startDate,
    endDate,
    intervalUnit
}: DidGetBasketsMetadataArgs): DidGetBasketsMetadataAction {
    return {
        type: BasketsActionConstants.DID_GET_BASKETS_METADATA,
        payload: {
            page: 1,
            order: "desc",
            orderBy: "date",
            totalPages,
            startDate,
            endDate,
            intervalUnit
        }
    };
}

export function didFailToGetBasketsMetadata(): DidFailToGetBasketsMetadataAction {
    return {
        type: BasketsActionConstants.DID_FAIL_TO_GET_BASKETS_METADATA
    };
}

type DidGetInitialBasketsArgs = {
    baskets: any;
    metadata: any
}
export function didGetInitialBaskets(payload: DidGetInitialBasketsArgs): DidGetInitialBasketsAction {
    return {
        type: BasketsActionConstants.DID_GET_INITIAL_BASKETS,
        payload
    };
}

export function didFailToGetInitialBaskets(): DidFailToGetInitialBasketsAction {
    return {
        type: BasketsActionConstants.DID_FAIL_TO_GET_INITIAL_BASKETS
    };
}

function computeUnit(startDate: Date, endDate: Date) {
    const range = moment(endDate).diff(moment(startDate), "days");
    if (range > 90) {
        return "month";
    }
    if (range > 14 && range <= 90) {
        return "week";
    }
    return "day";
}

export function getBasketsMetadata(): GetBasketsMetadataThunkResult<FetchBasketsMetadataResult> {
    return async function (dispatch) {
        const token = getToken();
        if (typeof token === "string" && validToken(token)) {
            const userId = returnUserId(token);

            try {
                const {startDate, endDate, totalPages} = userId && await fetchBasketsMetadata({userId}, token);
                const intervalUnit = computeUnit(startDate, endDate);

                return dispatch(didGetBasketsMetadata({totalPages, startDate, endDate, intervalUnit}));
            } catch (error) {
                console.log(error);
                return dispatch(didFailToGetBasketsMetadata());
            }
        }

        return dispatch(logOut());
    };
}

export function getInitialBaskets(): GetInitialBasketsThunkResult<FetchInitialBasketsResult> {
    return async function (dispatch, getState) {
        const token = getToken();
        if (typeof token === "string" && validToken(token)) {
            const userId = returnUserId(token);
            const startDate = selectPickedStartDate(getState());
            const endDate = selectPickedEndDate(getState());

            try {
                const {baskets, metadata} = userId && startDate && endDate &&
                    await fetchBaskets({userId, startDate, endDate}, token);
                return dispatch(didGetInitialBaskets({baskets, metadata}));

            } catch (error) {
                return dispatch(didFailToGetInitialBaskets());
            }
        }
        return dispatch(logOut());
    };
}

export function sortBaskets(): any {
    return {
        type: "SORTED"
    };
}


