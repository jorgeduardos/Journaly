import { DAY } from "../actions/";

export default function MonthsReducer(state = [], action) {
	switch (action.type) {
		case DAY:
			return action.payload;
		default:
			return state;
	}
}
