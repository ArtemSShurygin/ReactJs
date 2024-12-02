import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import TasksList from "./components/TasksList";

function App() {
	return (
		<div className="container">
			<Provider store={store}>
				<TasksList />
			</Provider>
		</div>
	);
}

export default App;
