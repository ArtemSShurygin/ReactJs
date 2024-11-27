import { configureStore } from "@reduxjs/toolkit";

const reducer = (theme = "light", action) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			return theme === "light" ? "dark" : "light";

		default:
			return theme;
	}
};

const store = configureStore({
	reducer: reducer,
});

export default store;
