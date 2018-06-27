import axios from "axios";

export const SELECT_MONTH = "select_month";
export const MONTH = "month";
export const FETCH_USER = "fetch_user";

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
