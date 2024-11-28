import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, changeAvailability } from "../reducers/catalogSlice";
import "../App.css";

const ProductsList = () => {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	return (
		<div className="product-list">
			{products.map((product) => (
				<section className="product-list__product" key={product.id}>
					<p>Id: {product.id}</p>
					<p>Name: {product.name}</p>
					<p>Description: {product.description}</p>
					<p>Price: {product.price}$</p>
					<p>Available: {product.available.toString()}</p>
					<button
						onClick={() => {
							console.log("btn dell", product);
							dispatch(deleteProduct(product));
						}}
					>
						Delete
					</button>
					<button
						onClick={() => {
							console.log("btn change availability", product);
							dispatch(changeAvailability(product));
						}}
					>
						Сhange availability
					</button>
				</section>
			))}
		</div>
	);
};

export default ProductsList;
