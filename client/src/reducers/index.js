import { combineReducers } from "redux";

import SelectMonthReducer from "./SelectMonthReducer.js";
import MonthsReducer from "./MonthsReducer";
import AuthReducer from "./AuthReducer.js";

export default combineReducers({
	selectedMonth: SelectMonthReducer,
	months: MonthsReducer,
	user: AuthReducer
});
