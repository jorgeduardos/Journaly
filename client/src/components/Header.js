import React, { Component } from "react";
import { connect } from "react-redux";

import {
	StyledHeader,
	StyledLogo,
	StyledLogin,
	StyledWelcome
} from "./component_styles/styles.js";

class Header extends Component {
	renderLogin() {
		switch (this.props.user) {
			case null:
				return;
			case false:
				return <StyledLogin href="/auth/google">Login</StyledLogin>;
			default:
				let name = `${this.props.user.googleName.givenName} ${
					this.props.user.googleName.lastName
				}`;
				return (
					<StyledWelcome>
						<h3
							style={{
								display: "inline-block",
								marginLeft: "8px"
							}}
						>
							{name}
						</h3>
					</StyledWelcome>
				);
		}
	}
	render() {
		return (
			<StyledHeader>
				<StyledLogo>Journaly</StyledLogo>
				{this.renderLogin()}
			</StyledHeader>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Header);
