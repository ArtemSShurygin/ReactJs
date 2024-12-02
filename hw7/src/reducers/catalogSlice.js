import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("setTimeout");
			resolve(tasks);
		}, 3000);
	});
});

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasksArr: [],
		loading: false,
		error: "",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTasks.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(fetchTasks.fulfilled, (state, action) => {
			state.tasksArr = action.payload;
			state.loading = false;
		});
	},
});

export const {} = tasksSlice.actions;
export default tasksSlice.reducer;
