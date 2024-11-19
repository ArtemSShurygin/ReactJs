import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function TemperatureConverter() {
	const [celsius, setCelsius] = useState("");
	const [fahrenheit, setFahrenheit] = useState("");

	function changeCelsius(e) {
		setCelsius(e.target.value);
		setFahrenheit((e.target.value * 9) / 5 + 32);
	}

	function changeFahrenheit(e) {
		setCelsius(((e.target.value - 32) * 5) / 9);
		setFahrenheit(e.target.value);
	}

	function clearDegrees() {
		setCelsius("");
		setFahrenheit("");
	}

	return (
		<div className="temperature-converter">
			<TextField
				onChange={changeCelsius}
				type="number"
				id="celsius-input"
				label="Градусы Цельсия"
				variant="filled"
				value={celsius}
			/>
			<TextField
				onChange={changeFahrenheit}
				type="number"
				id="fahrenheit-input"
				label="Градусы Фаренгейта"
				variant="filled"
				value={fahrenheit}
			/>
			<Button variant="contained" onClick={clearDegrees}>
				Сброс
			</Button>
		</div>
	);
}

export default TemperatureConverter;
