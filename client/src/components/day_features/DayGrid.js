import React, { Component } from "react";

import GridChilds from "./GridChilds.js";

//layouts
import { ChessLayout } from "../component_styles/styles.js";

class DayGrid extends Component {
	render() {
		return (
			<ChessLayout>
				<GridChilds
					layoutType={this.props.layoutType}
					widgets={this.props.widgets}
				/>
			</ChessLayout>
		);
	}
}

export default DayGrid;
