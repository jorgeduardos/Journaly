import { SELECT_MONTH } from "../actions/";

import moment from "moment";

export default function(state = {}, action) {
	switch (action.type) {
		case SELECT_MONTH:
			return action.payload;
		default:
			return moment().toDate();
	}
}
