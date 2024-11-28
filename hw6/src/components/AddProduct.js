import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/catalogSlice";
import "../App.css";

const AddProduct = () => {
	const dispatch = useDispatch();

	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productPrice, setproductPrice] = useState("");
	const [productAvailable, setProductAvailable] = useState(false);

	return (
		<div className="add-product">
			<p>Product name</p>
			<input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}></input>

			<p>Product description</p>
			<textarea
				className="textarea"
				rows="10"
				value={productDescription}
				onChange={(e) => setProductDescription(e.target.value)}
			></textarea>
			<p>Product price</p>
			<input type="number" value={productPrice} onChange={(e) => setproductPrice(e.target.value)}></input>
			<p>Product available</p>
			<select onChange={(e) => setProductAvailable(JSON.parse(e.target.value))}>
				<option value="false">false</option>
				<option value="true">true</option>
			</select>

			<button
				className="add-btn"
				onClick={() => {
					const product = {
						id: Date.now(),
						name: productName,
						description: productDescription,
						price: productPrice,
						available: productAvailable,
					};
					dispatch(addProduct(product));
					setProductName("");
					setProductDescription("");
					setproductPrice("");
				}}
			>
				Add
			</button>
		</div>
	);
};

export default AddProduct;
