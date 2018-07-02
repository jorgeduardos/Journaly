import { SELECT_DAY } from "../actions/";

import moment from "moment";

export default function(state = {}, action) {
	// console.log("in reducer", action.payload);
	switch (action.type) {
		case SELECT_DAY:
			return action.payload;
		default:
			return state;
	}
}
