import React, { Component } from "react";
import styled from "styled-components";

// styles;
const StyledEntries = styled.nav`
	width: 100%;
	heigh: 100%;
	background-color: #f56991;
	padding: 15px;
`;

class Entries extends Component {
	render() {
		return <StyledEntries>hola</StyledEntries>;
	}
}

export default Entries;
