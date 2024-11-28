import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeProduct } from "../reducers/catalogSlice";
import "../App.css";

const ChangeProduct = () => {
	const dispatch = useDispatch();

	const [productId, setProductId] = useState("");
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productAvailable, setProductAvailable] = useState("");

	return (
		<div className="add-product">
			<h2>Change Product</h2>
			<p>Product id</p>
			<input value={productId} type="number" onChange={(e) => setProductId(e.target.value)}></input>

			<p>New name</p>
			<input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}></input>

			<p>New product description</p>
			<textarea
				className="textarea"
				rows="10"
				value={productDescription}
				onChange={(e) => setProductDescription(e.target.value)}
			></textarea>
			<p>New product price</p>
			<input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}></input>
			<p>New product available</p>
			<select onChange={(e) => setProductAvailable(JSON.parse(e.target.value))}>
				<option value="false">false</option>
				<option value="true">true</option>
			</select>

			<button
				className="add-btn"
				onClick={() => {
					const product = {
						id: Number(productId),
						name: productName,
						description: productDescription,
						price: productPrice,
						available: productAvailable,
					};
					dispatch(changeProduct(product));
					setProductId("");
					setProductName("");
					setProductDescription("");
					setProductPrice("");
				}}
			>
				Change
			</button>
		</div>
	);
};

export default ChangeProduct;
