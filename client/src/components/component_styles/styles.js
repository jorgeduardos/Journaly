import styled from "styled-components";

// icons form fontAwesome

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

// EnterMonthForm

export const StyledDivForm = styled.div`
	height: 200px;
	width: 300px;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	border: 1px solid black;
	background-color: #f8ffd5;
	border-radius: 10px;
	z-index: 100;
`;

export const StyledTitleDiv = styled.div`
	width: 100%;
	text-align: center;
	border-bottom: 1px solid black;
	padding: 10px;
	background-color: #d1f2a5;
	border-radius: 10px 10px 0 0;
`;

export const StyledInputMonth = styled.input`
	margin-left: 5px;
	border-radius: 4px;
	font-size: 1em;
`;

export const StyledInputButton = styled.button`
	display: block;
	padding: 5px;
	margin: auto;
	margin-top: 15px;
	font-size: 1em;
	border-radius: 5px;
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
