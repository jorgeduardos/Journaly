import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchUser } from "./actions/";

// components
import Header from "./components/Header.js";
import GridContainer from "./components/GridContainer.js";
import EnterMonthForm from "./containers/EnterMonthForm.js";

const StyledApp = styled.section`
	height: 100vh;
	position: relative;
`;

//dummy component
const Landing = () => {
	return <h1>Landing</h1>;
};

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

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
			<BrowserRouter>
				<StyledApp>
					<Header />
					<Route exact path={"/"} component={Landing} />
					<Route
						exact
						path={"/dashboard"}
						render={() => (
							<GridContainer showMonth={this.showMonth} />
						)}
					/>
					{this.state.showMonthForm ? (
						<EnterMonthForm showMonth={this.showMonth} />
					) : null}
				</StyledApp>
			</BrowserRouter>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(
	null,
	mapDispatchToProps
)(App);
