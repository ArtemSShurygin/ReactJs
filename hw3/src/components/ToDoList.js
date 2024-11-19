import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function ToDoList() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: "Это первая задача" },
		{ id: 2, text: "Это вторая задача" },
		{ id: 3, text: "Это третья задача" },
	]);

	const [taskText, setTaskText] = useState("");

	async function addTask() {
		let newId = 0;
		tasks.length === 0 ? (newId = 1) : (newId = tasks[tasks.length - 1].id + 1);

		const newTask = { id: newId, text: `${taskText}` };
		setTasks([...tasks, newTask]);
		setTaskText("");
	}

	function changeTaskText(e) {
		setTaskText(e.target.value);
	}

	return (
		<div>
			{tasks.map((task) => (
				<div className="task" key={`task${task.id}`}>

					<ListItem alignItems="flex-start">
						<ListItemText className="task__item" primary={task.text} />
					</ListItem>

					<IconButton
						onClick={() => {
							setTasks(tasks.filter((thisTask) => thisTask.id !== task.id));
						}}
						aria-label="delete"
					>
						<DeleteIcon />
					</IconButton>
				</div>
			))}

			<div className="new-task">
				<TextField
					onChange={changeTaskText}
					id="outlined-multiline-flexible"
					label="Новая Задача"
					multiline
					value={taskText}
				/>
				<Button variant="contained" onClick={addTask}>
					Добавить задачу
				</Button>
			</div>
		</div>
	);
}

export default ToDoList;
