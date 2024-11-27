import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import ChangeTheme from "./components/ChangeTheme";

function App() {
	return (
		<Provider store={store}>
			<ChangeTheme />
		</Provider>
	);
}

export default App;
