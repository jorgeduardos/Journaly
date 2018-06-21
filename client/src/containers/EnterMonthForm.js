import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import { bindActionCreators } from "redux";

import { selectMonth } from "../actions/";

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
		this.props.selectMonth(this.state.startDate.toDate());
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
						paddingLeft: "8px",
						textAlign: "center"
					}}
				>
					<h4
						style={{ display: "inline-block", marginBottom: "5px" }}
					>
						Enter a Date
					</h4>
					<form>
						<DatePicker
							selected={this.state.startDate}
							onChange={this.handleChange.bind(this)}
							dateFormatCalendar={"MMM YYYY"}
							showMonthDropdown
							showYearDropdown
							placeholderText="Select a date"
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
	return bindActionCreators({ selectMonth }, dispatch);
}

export default connect(
	null,
	mapDispatchToProps
)(EnterMonthForm);
