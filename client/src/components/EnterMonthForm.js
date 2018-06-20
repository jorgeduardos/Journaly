import React, { Component } from "react";

// styles
import {
	StyledTitleDiv,
	StyledDivForm,
	StyledInputMonth,
	StyledInputButton
} from "./component_styles/styles.js";

class EnterMonthForm extends Component {
	onClickHandler() {
		this.props.showMonth(false);
	}

	render() {
		return (
			<StyledDivForm>
				<StyledTitleDiv>
					<h4>Enter Month</h4>
				</StyledTitleDiv>
				<div style={{ marginTop: "50px", paddingLeft: "8px" }}>
					<h4 style={{ display: "inline-block" }}>Enter month</h4>
					<StyledInputMonth type="text" placeholder="eg: July 2018" />
					<StyledInputButton onClick={this.onClickHandler.bind(this)}>
						Save
					</StyledInputButton>
				</div>
			</StyledDivForm>
		);
	}
}

export default EnterMonthForm;
