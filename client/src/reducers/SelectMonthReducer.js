import { SELECT_MONTH } from "../actions/";

import moment from "moment";

const today = moment().toDate();

export default function(state = today, action) {
	switch (action.type) {
		case SELECT_MONTH:
			return action.payload;
		default:
			return state;
	}
}
