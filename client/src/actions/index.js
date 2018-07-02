import axios from "axios";

export const SELECT_MONTH = "select_month";
export const SELECT_DAY = "select_day";
export const MONTH = "month";
export const FETCH_USER = "fetch_user";
export const DAY = "day";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	// console.log(res.data);
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export function selectMonth(date) {
	return {
		type: SELECT_MONTH,
		payload: date
	};
}

export const submitMonth = date => async dispatch => {
	const res = await axios.post("/api/new_month", { date: date });
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const fetchMonths = () => async dispatch => {
	const res = await axios.get("/api/months");
	// console.log(res);
	dispatch({
		type: MONTH,
		payload: res.data
	});
};

export const deleteMonth = id => async dispatch => {
	const res = await axios.delete("/api/delete_month", {
		data: { monthID: id }
	});

	dispatch({
		type: MONTH,
		payload: res.data
	});
};

//// days actions

export function selectDay(date) {
	// console.log("in action", date);
	return {
		type: SELECT_DAY,
		payload: date
	};
}

export const submitDay = (date, monthID) => async dispatch => {
	// console.log(monthID);
	const res = await axios.post("/api/new_day", {
		date: date,
		monthID: monthID
	});
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const fetchDays = () => async dispatch => {
	const res = await axios.get("/api/days");
	dispatch({
		type: DAY,
		payload: res.data
	});
};

export const deleteDay = id => async dispatch => {
	const res = await axios.delete("/api/delete_day", {
		data: { dayID: id }
	});

	dispatch({
		type: DAY,
		payload: res.data
	});
};
