import axios from "axios";

export const SELECT_MONTH = "select_month";
export const MONTH = "month";
export const FETCH_USER = "fetch_user";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	console.log(res.data);
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

//this should return a list of months fetch from db, add the next month to that list
export function renderMonthList(date) {
	return {
		type: MONTH,
		payload: date
	};
}
