import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import { selectMonth } from "../actions/";

import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
	onNavigateHandler(e) {
		this.props.selectMonth(e);
	}

	render() {
		const date = new Date(this.props.selectedMonth);
		return (
			<BigCalendar
				events={[]}
				startAccessor="start"
				endAccessor="end"
				views={["month"]}
				toolbar={true}
				date={date}
				onNavigate={this.onNavigateHandler.bind(this)}
			/>
		);
	}
}

function dispatchMapToProps(dispatch) {
	return bindActionCreators({ selectMonth }, dispatch);
}

function mapStateToProps(state) {
	return {
		selectedMonth: state.selectedMonth
	};
}

export default connect(
	mapStateToProps,
	dispatchMapToProps
)(Calendar);
