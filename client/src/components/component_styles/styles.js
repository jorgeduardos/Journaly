import styled from "styled-components";

// Header styles :

export const StyledHeader = styled.header`
	width: 100%;
	height: 6%;
	float: right;
	background-color: #ff9f80;
`;

export const StyledLogo = styled.a`
	font-size: 1.5em;
	float: left;
	margin-top: 10px;
	margin-left: 1em;
	font-weight: 500;
	cursor: pointer;
`;

export const StyledLogin = styled.a`
	float: right;
	margin-top: 15px;
	margin-right: 2em;
	cursor: pointer;
`;

// GridContainer styles

export const StyledContainer = styled.div`
	height: 94%;
	width: 100%;
	display: grid;
	grid-template-rows: 100%;
	grid-template-columns: 20% 80%;
`;

// Entries styles

export const StyledEntries = styled.nav`
	width: 100%;
	heigh: 100%;
	background-color: #f56991;
	padding: 15px;
`;

// MISC

export const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	margin-left: 5px;
	padding: 5px;
	font-size: ${props => (props.primary ? "1em" : "0.9em")};
	font-weight: 500;
`;
