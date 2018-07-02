import React, { Component } from "react";

import ToDoList from "./widgets/ToDoList.js";

import { StyledGridChild } from "../component_styles/styles.js";

class GridChilds extends Component {
	renderWidgets(widget, i) {
		switch (widget[i]) {
			case "TODOLIST":
				return <ToDoList />;
			default:
				return null;
		}
	}

	renderDivs(layoutType, widget) {
		switch (layoutType) {
			case "CHESS":
				return [
					<StyledGridChild key="1">
						{this.renderWidgets(this.props.widgets, 0)}
					</StyledGridChild>,
					<StyledGridChild key="2">
						{this.props.widgets[1]
							? this.renderWidgets(this.props.widgets, 1)
							: null}
					</StyledGridChild>,
					<StyledGridChild key="3">
						{this.props.widgets[2]
							? this.renderWidgets(this.props.widgets, 2)
							: null}
					</StyledGridChild>,
					<StyledGridChild key="4">
						{this.props.widgets[3]
							? this.renderWidgets(this.props.widgets, 3)
							: null}
					</StyledGridChild>
				];
			case "PENELOPE":
				return [
					<StyledGridChild
						key="1"
						style={{ gridRow: "span 2", backgroundColor: "orange" }}
					>
						{this.renderWidgets(this.props.widgets, 0)}
					</StyledGridChild>,
					<StyledGridChild key="2">
						{this.renderWidgets(this.props.widgets, 1)}
					</StyledGridChild>,
					<StyledGridChild key="3">
						{this.renderWidgets(this.props.widgets, 2)}
					</StyledGridChild>
				];
			case "KHALUA":
				return [
					<StyledGridChild key="1">
						{this.renderWidgets(this.props.widgets, 0)}
					</StyledGridChild>,
					<StyledGridChild
						key="2"
						style={{
							gridColumnStart: "2",
							gridRow: "span 2",
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 1)}
					</StyledGridChild>,
					<StyledGridChild
						key="3"
						style={{
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 2)}
					</StyledGridChild>
				];
			case "VERTICAL-TRACK":
				return [
					<StyledGridChild
						key="1"
						style={{
							gridRowStart: "1",
							gridColumn: "span 2",
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 0)}
					</StyledGridChild>,
					<StyledGridChild
						key="2"
						style={{
							gridRowStart: "2",
							gridColumn: "span 2",
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 1)}
					</StyledGridChild>
				];
			default:
				return [
					<StyledGridChild
						key="1"
						style={{ gridRow: "span 2", backgroundColor: "orange" }}
					>
						{this.renderWidgets(this.props.widgets, 0)}
					</StyledGridChild>,
					<StyledGridChild key="2">
						{this.renderWidgets(this.props.widgets, 1)}
					</StyledGridChild>,
					<StyledGridChild key="3">
						{this.renderWidgets(this.props.widgets, 2)}
					</StyledGridChild>
				];
		}
	}

	render() {
		return this.renderDivs(this.props.layoutType);
	}
}

export default GridChilds;
