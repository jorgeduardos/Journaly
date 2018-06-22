import { MONTH } from "../actions/";

export default function MonthsReducer(state = [], action) {
	switch (action.type) {
		case MONTH:
			return action.payload;
		default:
			return state;
	}
}
