import React, { Component } from "react";

import { StyledContainer } from "./component_styles/styles.js";

// components;
import Entries from "./Entries.js";

class GridContainer extends Component {
	render() {
		return (
			<StyledContainer>
				<Entries showMonth={this.props.showMonth} />
			</StyledContainer>
		);
	}
}

export default GridContainer;
