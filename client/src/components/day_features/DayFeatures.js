import React, { Component } from "react";

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
					Junio 19 del 2019
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

export default DayFeatures;
