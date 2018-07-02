import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

// import { fetchDays } from "../actions/";

import Day from "./Day.js";

//styles
import { StyledButton } from "./component_styles/styles.js";

class DayList extends Component {
	onClickHandler() {
		this.props.showDay(true, this.props.monthID);
	}

	renderDays() {
		if (this.props.days.length === 0) {
		} else {
			return _.map(this.props.days, day => {
				return day._month === this.props.monthID ? (
					<Day
						date={day.date}
						key={day._id}
						dayID={day._id}
						showCalendarFunction={this.props.showCalendarFunction}
					/>
				) : null;
			});
		}
	}

	render() {
		return (
			<div style={{ marginLeft: "20px" }}>
				{this.renderDays()}
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

function mapStateToProps(state) {
	return {
		days: state.days
	};
}

export default connect(mapStateToProps)(DayList);
