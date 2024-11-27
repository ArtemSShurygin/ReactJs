import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";

const ChangeTheme = () => {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	const toggleTheme = () => {
		dispatch({ type: "TOGGLE_THEME" });
	};

	return (
		<div className={theme === "light" ? "light_theme" : "dark_theme"}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe hic, recusandae ipsam numquam unde
				voluptas maxime suscipit sed ab et ipsum ratione nisi iure rem. Vitae voluptates eaque debitis.
			</p>
			<button onClick={toggleTheme}>Сменить тему</button>
		</div>
	);
};

export default ChangeTheme;
