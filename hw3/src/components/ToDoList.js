import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function ToDoList() {
	const [tasks, setTasks] = useState([]);

	const [taskText, setTaskText] = useState("");

	async function add() {
		let newId = 0;
		tasks.length === 0 ? (newId = 1) : (newId = tasks[tasks.length - 1].id + 1);
		console.log(newId);
		console.log("-------");

		const newTask = { id: newId, display: true, text: `${taskText}` };
		setTasks([...tasks, newTask]);
		setTaskText("");
	}

	function changeTaskText(e) {
		setTaskText(e.target.value);
	}

	return (
		<div>
			{tasks.map((task) => (
				<div key={task.id}>
					<p>{task.text}</p>
					<button
						className="btn-delete-task"
						onClick={() => {
							setTasks(tasks.filter((thisTask) => thisTask.id !== task.id));
						}}
					>
						Удалить task
					</button>
				</div>
			))}

			<TextField onChange={changeTaskText} id="filled-basic" label="Новая Задача" variant="filled" value={taskText} />
			<button onClick={add}>добавить</button>
		</div>
	);
}

export default ToDoList;
