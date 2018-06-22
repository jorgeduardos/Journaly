import { combineReducers } from "redux";

import SelectMonthReducer from "./SelectMonthReducer.js";
import MonthsReducer from "./MonthsReducer";

export default combineReducers({
	selectedMonth: SelectMonthReducer,
	months: MonthsReducer
});
