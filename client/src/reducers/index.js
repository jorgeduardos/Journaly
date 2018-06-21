import { combineReducers } from "redux";

import SelectMonthReducer from "./SelectMonthReducer.js";

export default combineReducers({
	selectedMonth: SelectMonthReducer
});
