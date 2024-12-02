import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../reducers/catalogSlice";

const TasksList = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasksArr);
	const loading = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	console.log(tasks, loading, Date.now());

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>Список задач</h1>
			{tasks.map((task) => (
				<p key={task.id}>
					{task.title} ({task.completed ? "complited" : "uncomplited"})
				</p>
			))}
		</div>
	);
};

export default TasksList;
