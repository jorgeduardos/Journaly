import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
				return (
					<StyledLogin href="/auth/google">
						Login with Google
					</StyledLogin>
				);
			default:
				let name = `${this.props.user.googleName.givenName} ${
					this.props.user.googleName.lastName
				}`;
				return (
					<StyledWelcome>
						<Link to={"/dashboard"}>
							<h3
								style={{
									display: "inline-block",
									marginLeft: "8px",
									cursor: "pointer",
									color: "black"
								}}
							>
								{name}
							</h3>
						</Link>
						<a
							style={{
								textDecoration: "none",
								marginLeft: "10px",
								fontSize: "0.8em"
							}}
							href="/api/logout"
						>
							Logout
						</a>
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
