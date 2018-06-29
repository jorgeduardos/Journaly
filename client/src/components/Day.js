import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class Day extends Component {
	render() {
		return <h6>{moment(this.props.date).format("MMM Do YYYY")}</h6>;
	}
}

export default Day;
