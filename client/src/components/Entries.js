import React, { Component } from "react";

import { StyledButton, StyledEntries } from "./component_styles/styles.js";

class Entries extends Component {
	render() {
		return (
			<StyledEntries>
				<div>
					<i
						style={{ color: "#d1f2a5", cursor: "pointer" }}
						className="fas fa-plus-circle"
					/>
					<StyledButton
						primary
						onClick={() => this.props.showMonth(true)}
					>
						New Month
					</StyledButton>
				</div>
			</StyledEntries>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ showMonthForm }, dispatch);
// }

export default Entries;
