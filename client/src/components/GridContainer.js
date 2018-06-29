import React, { Component } from "react";
import { StyledContainer } from "./component_styles/styles.js";

// components;
import Entries from "./Entries.js";
import FeaturesContainer from "./FeaturesContainer.js";

class GridContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCalendar: true
		};
	}

	showCalendarFunction = value => {
		this.setState({
			showCalendar: value
		});
	};

	render() {
		return (
			<StyledContainer>
				<Entries
					showMonth={this.props.showMonth}
					showDay={this.props.showDay}
					showCalendarFunction={this.showCalendarFunction}
				/>
				<FeaturesContainer showCalendar={this.state.showCalendar} />
			</StyledContainer>
		);
	}
}

export default GridContainer;
