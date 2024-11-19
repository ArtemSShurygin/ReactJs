import "./App.css";

import TemperatureConverter from "./components/TemperatureConverter";
import ToDoList from "./components/ToDoList";

function App() {
	return (
		<div className="App container">
			<TemperatureConverter />
			<ToDoList />
		</div>
	);
}

export default App;
