import React, { Component } from "react";

import Calendar from "../containers/Calendar.js";
import DayFeatures from "./day_features/DayFeatures.js";

class FeaturesContainer extends Component {
	render() {
		return (
			<div style={{ height: "90%", width: "90%", padding: "25px" }}>
				{this.props.showCalendar ? <Calendar /> : <DayFeatures />}
			</div>
		);
	}
}

export default FeaturesContainer;
