import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
	name: "catalog",
	initialState: {
		products: [
			{
				id: 1,
				name: "product 1",
				description: " about product 1",
				price: 50,
				available: true,
			},
			{
				id: 2,
				name: "product 2",
				description: " about product 2",
				price: 70,
				available: true,
			},
			{
				id: 3,
				name: "product 3",
				description: " about product 3",
				price: 90,
				available: false,
			},
		],
	},
	reducers: {
		deleteProduct: (state, { payload: productItem }) => {
			const filteredProducts = state.products.filter((item) => item.id !== productItem.id);
			console.log("filteredProducts", filteredProducts);
			state.products = filteredProducts;
		},

		changeAvailability: (state, { payload: productItem }) => {
			const findId = state.products.findIndex((product) => product.id === productItem.id);
			state.products[findId].available = !state.products[findId].available;
		},

		addProduct: (state, { payload: productItem }) => {
			state.products.push(productItem);
		},
	},
});

export const { deleteProduct, changeAvailability, addProduct } = catalogSlice.actions;
export default catalogSlice.reducer;
