export const SELECT_MONTH = "select_month";

export function selectMonth(date) {
	return {
		type: SELECT_MONTH,
		payload: date
	};
}
