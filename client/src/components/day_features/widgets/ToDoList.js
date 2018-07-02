import React, { Component } from "react";

import { StyledTodoList, StyledTable } from "../../component_styles/styles.js";

class ToDoList extends Component {
	renderTodo() {
		return (
			<tr>
				<th>
					<i class="far fa-circle" />
					<h4 stlye={{ display: "inline-block", marginLeft: "10px" }}>
						Comer Pollo
					</h4>
				</th>
			</tr>
		);
	}

	render() {
		return (
			<StyledTodoList>
				<StyledTable>
					<tr>
						<th>
							<h2
								style={{
									fontSize: "2em",
									marginBottom: "15px"
								}}
							>
								To Do List
							</h2>
						</th>
					</tr>
					<tr>
						<th>
							<h3>Add To-Do</h3>
						</th>
					</tr>
				</StyledTable>
			</StyledTodoList>
		);
	}
}

export default ToDoList;

// https://dribbble.com/shots/4507482-To-Do-List
