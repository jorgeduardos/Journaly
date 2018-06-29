import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import { bindActionCreators } from "redux";

import { selectDay, submitDay, fetchDays } from "../actions/"; //import right actions

// styles
import "react-datepicker/dist/react-datepicker.css";
import {
	StyledTitleDiv,
	StyledDivForm,
	StyledInputButton
} from "../components/component_styles/styles.js";

class EnterMonthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment()
		};
	}

	onClickHandler(e) {
		e.preventDefault();
		// this.props.selectDay(this.state.startDate.toDate()); // selectDay
		this.props.submitDay(this.state.startDate.toDate(), this.props.monthID); // submitDay
		// this.props.fetchDays(); // fetchDays
		this.props.showDay(false); // showDay
	}

	handleChange(date) {
		this.setState({
			startDate: date
		});
	}

	render() {
		console.log(this.props.months);
		return (
			<StyledDivForm>
				<StyledTitleDiv>
					<h4>New Day</h4>
				</StyledTitleDiv>
				<div
					style={{
						marginTop: "15px",
						padding: "8px",
						textAlign: "center"
					}}
				>
					<p
						style={{
							display: "inline-block",
							marginBottom: "5px",
							fontWeight: "600",
							fontSize: "0.9em"
						}}
					>
						Enter a date
					</p>
					<form style={{ marginTop: "10px" }}>
						<DatePicker
							selected={this.state.startDate}
							onChange={this.handleChange.bind(this)}
							dateFormatCalendar={"MMMM YYYY"}
							showMonthDropdown
							showYearDropdown
							placeholderText="Select a date"
							dateFormat="MMMM DD, YYYY"
						/>
						<StyledInputButton
							onClick={this.onClickHandler.bind(this)}
						>
							Create
						</StyledInputButton>
					</form>
					<StyledInputButton
						onClick={() => this.props.showDay(false)}
					>
						Cancel
					</StyledInputButton>
				</div>
			</StyledDivForm>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ selectDay, submitDay, fetchDays }, //change actions
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
)(EnterMonthForm);
