import { SELECT_DAY } from "../actions/";

import moment from "moment";

// const today = moment().toDate();

export default function(state = {}, action) {
	switch (action.type) {
		case SELECT_DAY:
			return action.payload;
		default:
			return state;
	}
}
