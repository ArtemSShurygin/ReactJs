import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


export function TemperatureConverter() {
	const [celsius, setСelsius] = useState("");
	const [fahrenheit, setFahrenheit] = useState("");

	function changeСelsius(e) {
		setСelsius(e.target.value);
		setFahrenheit(e.target.value*9/5+32);
	}

	function changeFahrenheit(e) {
		setСelsius((e.target.value-32)*5/9);
		setFahrenheit(e.target.value);
	}

	function clearDegrees() {
    setСelsius("");
		setFahrenheit("");
	}

	return (
		<div className="temperature-converter">
			<TextField
				onClick={clearDegrees}
				onChange={changeСelsius}
        type="number"
				id="filled-basic"
				label="Градусы Цельсия"
				variant="filled"
				value={celsius}
			/>
			<TextField
				onClick={clearDegrees}
				onChange={changeFahrenheit}
        type="number"
				id="filled-basic"
				label="Градусы Фаренгейта"
				variant="filled"
				value={fahrenheit}
			/>
		</div>
	);
}

export default TemperatureConverter;
