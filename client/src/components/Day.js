import React, { Component } from "react";

//styles
import { StyledButton } from "./component_styles/styles.js";

class Day extends Component {
	onClickHandler() {
		this.props.showCalendarFunction(false);
	}

	render() {
		return (
			<div style={{ marginLeft: "20px" }}>
				<i
					style={{ color: "#d1f2a5", cursor: "pointer" }}
					className="fas fa-plus-circle"
				/>
				<StyledButton onClick={this.onClickHandler.bind(this)}>
					New Day
				</StyledButton>
			</div>
		);
	}
}

export default Day;
