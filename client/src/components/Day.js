import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import { selectDay, deleteDay } from "../actions/";

class Day extends Component {
	handleOnClick() {
		let newDate = new Date(this.props.date);
		// console.log(newDate);
		this.props.showCalendarFunction(false);
		this.props.selectDay(newDate);
	}

	onTrashClickHanlder() {
		this.props.deleteDay(this.props.dayID);
		this.props.showCalendarFunction(true);
	}

	render() {
		return (
			<div
				style={{
					marginTop: "5px"
				}}
			>
				<h5
					onClick={this.handleOnClick.bind(this)}
					style={{
						display: "inline-block",
						marginBottom: "3px",
						cursor: "pointer"
					}}
				>
					{moment(this.props.date).format("MMM Do YYYY")}
				</h5>
				<i
					className="far fa-trash-alt"
					style={{ float: "right" }}
					onClick={this.onTrashClickHanlder.bind(this)}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectDay, deleteDay }, dispatch);
}

function mapStateToProps(state) {
	return {
		days: state.days
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Day);
