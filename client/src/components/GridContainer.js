import React, { Component } from "react";

import { StyledContainer } from "./component_styles/styles.js";

// components;
import Entries from "./Entries.js";
import FeaturesContainer from "./FeaturesContainer.js";

class GridContainer extends Component {
	render() {
		return (
			<StyledContainer>
				<Entries showMonth={this.props.showMonth} />
				<FeaturesContainer />
			</StyledContainer>
		);
	}
}

export default GridContainer;
