import { configureStore } from "@reduxjs/toolkit";

const initialValue = {
	theme: "light",
};

const reducer = (state = initialValue, action) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			return { ...state, theme: state.theme === "light" ? "dark" : "light" };

		default:
			return state;
	}
};

const store = configureStore({
	reducer: reducer,
});

export default store;
