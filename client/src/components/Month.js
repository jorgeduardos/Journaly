import React, { Component } from "react";

import { StyledButton } from "./component_styles/styles.js";

class Month extends Component {
	render() {
		return (
			<div
				style={{
					width: "90%",
					float: "right"
				}}
			>
				<i
					style={{ color: "#d1f2a5", cursor: "pointer" }}
					className="fas fa-plus-circle"
				/>
				<StyledButton>New Day</StyledButton>
			</div>
		);
	}
}

export default Month;
