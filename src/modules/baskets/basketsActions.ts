import {BasketsActionConstants, GetBasketsMetadataThunkResult, FetchBasketsMetadataResult, DidFailToGetBasketsMetadataAction, DidGetBasketsMetadataAction} from "modules/baskets/basketsTypes";
import {getToken, validToken, returnUserId} from "services/jwtManager";
import fetchBasketsMetadata from "api/fetchBasketsMetadata";
import {logOut} from "modules/logout/logoutActions";
import moment from "moment";


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


