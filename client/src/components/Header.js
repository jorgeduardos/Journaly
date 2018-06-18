import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	width: 100%;
	height: 6%;
	float: right;
	background-color: #ff9f80;
`;

const StyledLogo = styled.a`
	font-size: 1.5em;
	float: left;
	margin-top: 10px;
	margin-left: 1em;
	font-weight: 500;
	cursor: pointer;
`;

const StyledLogin = styled.a`
	float: right;
	margin-top: 15px;
	margin-right: 2em;
	cursor: pointer;
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>Journaly</StyledLogo>
			<StyledLogin>Login</StyledLogin>
		</StyledHeader>
	);
};

export default Header;
