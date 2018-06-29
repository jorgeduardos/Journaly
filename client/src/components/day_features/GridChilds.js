import React, { Component } from "react";

import ToDoList from "./widgets/ToDoList.js";

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
					<div key="1" style={{ backgroundColor: "orange" }}>
						{this.renderWidgets(this.props.widgets, 0)}
					</div>,
					<div key="2" style={{ backgroundColor: "orange" }}>
						{this.props.widgets[1]
							? this.renderWidgets(this.props.widgets, 1)
							: null}
					</div>,
					<div key="3" style={{ backgroundColor: "orange" }}>
						{this.props.widgets[2]
							? this.renderWidgets(this.props.widgets, 2)
							: null}
					</div>,
					<div key="4" style={{ backgroundColor: "orange" }}>
						{this.props.widgets[3]
							? this.renderWidgets(this.props.widgets, 3)
							: null}
					</div>
				];
			case "PENELOPE":
				return [
					<div
						key="1"
						style={{ gridRow: "span 2", backgroundColor: "orange" }}
					>
						{this.renderWidgets(this.props.widgets, 0)}
					</div>,
					<div key="2" style={{ backgroundColor: "orange" }}>
						{this.renderWidgets(this.props.widgets, 1)}
					</div>,
					<div key="3" style={{ backgroundColor: "orange" }}>
						{this.renderWidgets(this.props.widgets, 2)}
					</div>
				];
			case "KHALUA":
				return [
					<div key="1" style={{ backgroundColor: "orange" }}>
						{this.renderWidgets(this.props.widgets, 0)}
					</div>,
					<div
						key="2"
						style={{
							gridColumnStart: "2",
							gridRow: "span 2",
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 1)}
					</div>,
					<div
						key="3"
						style={{
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 2)}
					</div>
				];
			case "VERTICAL-TRACK":
				return [
					<div
						key="1"
						style={{
							gridRowStart: "1",
							gridColumn: "span 2",
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 0)}
					</div>,
					<div
						key="2"
						style={{
							gridRowStart: "2",
							gridColumn: "span 2",
							backgroundColor: "orange"
						}}
					>
						{this.renderWidgets(this.props.widgets, 1)}
					</div>
				];
			default:
				return [
					<div
						key="1"
						style={{ gridRow: "span 2", backgroundColor: "orange" }}
					>
						{this.renderWidgets(this.props.widgets, 0)}
					</div>,
					<div key="2" style={{ backgroundColor: "orange" }}>
						{this.renderWidgets(this.props.widgets, 1)}
					</div>,
					<div key="3" style={{ backgroundColor: "orange" }}>
						{this.renderWidgets(this.props.widgets, 2)}
					</div>
				];
		}
	}

	render() {
		return this.renderDivs(this.props.layoutType);
	}
}

export default GridChilds;
