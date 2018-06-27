import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

import { fetchMonths, selectMonth } from "../actions/";

import Month from "./Month.js";
import { StyledButton, StyledEntries } from "./component_styles/styles.js";

class Entries extends Component {
	componentDidMount() {
		this.props.fetchMonths();
	}

	renderMonth() {
		if (this.props.months.length === 0) {
			console.log("not months to display");
		} else {
			return _.map(this.props.months, month => {
				return (
					<Month
						id={month._id}
						date={month.date}
						key={month._id}
						showCalendarFunction={this.props.showCalendarFunction}
					/>
				);
			});
		}
	}

	render() {
		return (
			<StyledEntries>
				{this.renderMonth()}
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMonths, selectMonth }, dispatch);
}

function mapStateToProps(state) {
	return {
		months: state.months
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entries);
