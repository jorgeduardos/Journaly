import React, { Component } from "react";
import Month from "./Month.js";

import { StyledButton, StyledEntries } from "./component_styles/styles.js";

class Entries extends Component {
	render() {
		return (
			<StyledEntries>
				<div>
					<i
						style={{ color: "#d1f2a5", cursor: "pointer" }}
						className="fas fa-plus-circle"
					/>
					<StyledButton primary>New Month</StyledButton>
					<Month />
				</div>
			</StyledEntries>
		);
	}
}

export default Entries;
