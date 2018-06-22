import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import { selectMonth } from "../actions/";

import { StyledButton } from "./component_styles/styles.js";

class Month extends Component {
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
						cursor: "pointer"
					}}
					onClick={() => this.props.selectMonth(this.props.months)}
				>
					{moment(this.props.months).format("MMMM YYYY")}
				</h4>
				<div style={{ marginLeft: "20px" }}>
					<i
						style={{ color: "#d1f2a5", cursor: "pointer" }}
						className="fas fa-plus-circle"
					/>
					<StyledButton>New Day</StyledButton>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectMonth }, dispatch);
}

function mapStateToProps(state) {
	return {
		months: state.months
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Month);
