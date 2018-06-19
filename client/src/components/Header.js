import React from "react";

import {
	StyledHeader,
	StyledLogo,
	StyledLogin
} from "./component_styles/styles.js";

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>Journaly</StyledLogo>
			<StyledLogin>Login</StyledLogin>
		</StyledHeader>
	);
};

export default Header;
