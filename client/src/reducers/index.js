import { combineReducers } from "redux";

import SelectMonthReducer from "./SelectMonthReducer.js";
import MonthsReducer from "./MonthsReducer";
import AuthReducer from "./AuthReducer.js";
import SelectDayReducer from "./SelectDayReducer.js";
import DaysReducer from "./DaysReducer.js";

export default combineReducers({
	selectedMonth: SelectMonthReducer,
	selectedDay: SelectDayReducer,
	months: MonthsReducer,
	days: DaysReducer,
	user: AuthReducer
});
