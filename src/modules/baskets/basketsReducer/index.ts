import {combineReducers} from "redux";
import byId from "./basketsByIdReducer";
import metadata from "./basketsMetadataReducer";
import chart from "./basketsChartReducer";
import datePicker from "./basketsDatePickerReducer";

const reducer = combineReducers({
    byId,
    metadata,
    chart,
    datePicker
});

export default reducer;
