import React from "react";
import styled from "styled-components";

// components;
import Entries from "./Entries.js";

const StyledContainer = styled.div`
	height: 94%;
	width: 100%;
	display: grid;
	grid-template-rows: 100%;
	grid-template-columns: 20% 80%;
`;

const GridContainer = () => {
	return (
		<StyledContainer>
			<Entries />
		</StyledContainer>
	);
};

export default GridContainer;
