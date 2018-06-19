import React from "react";

import { StyledContainer } from "./component_styles/styles.js";

// components;
import Entries from "./Entries.js";

const GridContainer = () => {
	return (
		<StyledContainer>
			<Entries />
		</StyledContainer>
	);
};

export default GridContainer;
