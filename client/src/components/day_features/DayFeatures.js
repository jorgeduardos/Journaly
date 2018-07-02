import React, { Component } from "react";
import { connect } from "react-redux";

import moment from "moment";

//components
import WidgetNav from "./widgets/WidgetNav.js";
import DayGrid from "./DayGrid.js";

class DayFeatures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			layoutType: "PENELOPE",
			widgets: ["TODOLIST", "TODOLIST"] //array of strings
		};
	}
	render() {
		return (
			<div style={{ height: "100%" }}>
				<h3 style={{ textAlign: "center", marginBottom: "10px" }}>
					{moment(this.props.selectedDay).format("MMMM Do YYYY")}
				</h3>
				<WidgetNav />
				<DayGrid
					layoutType={this.state.layoutType}
					widgets={this.state.widgets}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay
	};
}

export default connect(mapStateToProps)(DayFeatures);
