import React, { Component } from "react";
import styled from "styled-components";

// components
import Header from "./components/Header.js";
import GridContainer from "./components/GridContainer.js";
import EnterMonthForm from "./containers/EnterMonthForm.js";

const StyledApp = styled.section`
	height: 100vh;
	position: relative;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMonthForm: false
		};
	}

	showMonth = value => {
		this.setState({ showMonthForm: value });
	};

	render() {
		return (
			<StyledApp>
				<Header />
				<GridContainer showMonth={this.showMonth} />
				{this.state.showMonthForm ? (
					<EnterMonthForm showMonth={this.showMonth} />
				) : null}
			</StyledApp>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		showMonthForm: state.showMonthForm
// 	};
// }

export default App;
