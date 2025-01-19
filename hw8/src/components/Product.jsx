import React from "react";
import { useContext} from "react";
import "styles/style.css";
import { CartContext } from "contexts/CartContext";

const Product = ({ id, name, description, price, color, size, img, quantity }) => {

	const {addToCart } = useContext(CartContext);

	return (
		<div className="card_list2-card">
			<div className="card_list2-card-add">
				<button onClick={() =>addToCart(id)}>
					<img src={"./img/nav5.png"} alt="icon" />
					<span>Add to Cart</span>
				</button>
			</div>

			<img src={img} alt="card1" />
			<h3>{name}</h3>
			<p className="card_list2-card_about">{description}</p>
			<p className="card_list2-card_price">${price}</p>
		</div>
	);
};

export default Product;
