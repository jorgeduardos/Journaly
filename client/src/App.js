import React, { Component } from "react";
import styled from "styled-components";

// components
import Header from "./components/Header.js";
import GridContainer from "./components/GridContainer.js";

const StyledApp = styled.section`
	height: 100vh;
`;

class App extends Component {
	render() {
		return (
			<StyledApp>
				<Header />
				<GridContainer />
			</StyledApp>
		);
	}
}

export default App;
