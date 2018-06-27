import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import { bindActionCreators } from "redux";

import { selectMonth, submitMonth, fetchMonths } from "../actions/";

// styles
import "react-datepicker/dist/react-datepicker.css";
import {
	StyledTitleDiv,
	StyledDivForm,
	StyledInputButton
} from "../components/component_styles/styles.js";

const CalendarContainer = () => {
	return <div style={{ visibility: "hidden" }} />;
};

class EnterMonthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment()
		};
	}

	onClickHandler(e) {
		e.preventDefault();
		this.props.selectMonth(this.state.startDate.toDate());
		this.props.submitMonth(this.state.startDate.toDate());
		this.props.fetchMonths();
		this.props.showMonth(false);
	}

	handleChange(date) {
		this.setState({
			startDate: date
		});
	}

	render() {
		return (
			<StyledDivForm>
				<StyledTitleDiv>
					<h4>New Month</h4>
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
							fontSize: "0.8em"
						}}
					>
						Enter a date with this format: "MMMM YYYY" <br /> Eg:
						December 2018
					</p>
					<form style={{ marginTop: "10px" }}>
						<DatePicker
							selected={this.state.startDate}
							onChange={this.handleChange.bind(this)}
							dateFormatCalendar={"MMM YYYY"}
							showMonthDropdown
							showYearDropdown
							placeholderText="Select a date"
							dateFormat="MMMM YYYY"
							calendarContainer={CalendarContainer}
						/>
						<StyledInputButton
							onClick={this.onClickHandler.bind(this)}
						>
							Create
						</StyledInputButton>
					</form>
					<StyledInputButton
						onClick={() => this.props.showMonth(false)}
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
		{ selectMonth, submitMonth, fetchMonths },
		dispatch
	);
}

export default connect(
	null,
	mapDispatchToProps
)(EnterMonthForm);
