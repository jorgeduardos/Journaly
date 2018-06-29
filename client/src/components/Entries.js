import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

import { fetchMonths, selectMonth, fetchDays } from "../actions/";

import Month from "./Month.js";
import { StyledButton, StyledEntries } from "./component_styles/styles.js";

class Entries extends Component {
	componentDidMount() {
		this.props.fetchMonths();
		this.props.fetchDays();
	}

	renderMonth() {
		if (this.props.months.length === 0) {
		} else {
			return _.map(this.props.months, month => {
				return (
					<Month
						monthID={month._id}
						date={month.date}
						key={month._id}
						showCalendarFunction={this.props.showCalendarFunction}
						showDay={this.props.showDay}
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
	return bindActionCreators(
		{ fetchMonths, selectMonth, fetchDays },
		dispatch
	);
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
