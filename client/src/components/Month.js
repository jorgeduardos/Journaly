import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import Day from "./Day.js";

import { selectMonth, deleteMonth } from "../actions/";

class Month extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDays: false,
			eyeDisplay: true
		};
	}

	onClickHandler() {
		this.props.showCalendarFunction(true);
		let newDate = new Date(this.props.date);
		this.props.selectMonth(newDate);
	}

	onTrashClickHanlder() {
		this.props.deleteMonth(this.props.id);
	}

	renderDays() {
		return this.state.showDays ? (
			<Day showCalendarFunction={this.props.showCalendarFunction} />
		) : null;
	}

	renderEye() {
		return this.state.eyeDisplay ? (
			<i
				className="far fa-eye"
				style={{ marginLeft: "10px" }}
				onClick={() =>
					this.setState({
						showDays: !this.state.showDays,
						eyeDisplay: !this.state.eyeDisplay
					})
				}
			/>
		) : (
			<i
				className="far fa-eye-slash"
				style={{ marginLeft: "10px" }}
				onClick={() =>
					this.setState({
						showDays: !this.state.showDays,
						eyeDisplay: !this.state.eyeDisplay
					})
				}
			/>
		);
	}

	render() {
		return (
			<div
				style={{
					marginTop: "5px"
				}}
			>
				<h4
					style={{
						fontSize: "1em",
						marginBottom: "5px",
						cursor: "pointer",
						display: "inline-block"
					}}
					onClick={this.onClickHandler.bind(this)}
				>
					{moment(this.props.date).format("MMMM YYYY")}
				</h4>
				{this.renderEye()}
				<i
					className="far fa-trash-alt"
					style={{ float: "right" }}
					onClick={this.onTrashClickHanlder.bind(this)}
				/>
				{this.renderDays()}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectMonth, deleteMonth }, dispatch);
}

export default connect(
	null,
	mapDispatchToProps
)(Month);
