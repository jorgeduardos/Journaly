import React, { Component } from "react";
import { connect } from "react-redux";

import Month from "./Month.js";
import { StyledButton, StyledEntries } from "./component_styles/styles.js";

class Entries extends Component {
	render() {
		console.log(this.props.months);
		return (
			<StyledEntries>
				{this.props.months.length === 0 ? (
					console.log("not months to display")
				) : (
					<Month />
				)}
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

function mapStateToProps(state) {
	return {
		months: state.months
	};
}

export default connect(mapStateToProps)(Entries);
