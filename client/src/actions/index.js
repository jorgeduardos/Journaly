export const SELECT_MONTH = "select_month";
export const MONTH = "month";

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
