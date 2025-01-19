import React from "react";
import { useContext } from "react";
import "styles/style.css";
import "styles/style_cart.css";
import dataAllProducts from "data/allProducts";
import { CartContext } from "contexts/CartContext";

import Select from "components/Select";

const CartPage = () => {
	let productsInCart = [];
	let productToCart;
	let totalPrice = 0;
	const { cartProducts, changeProductQuantity, deleteProduct, clearCart } = useContext(CartContext);
	const parseDataCatalogProducts = JSON.parse(dataAllProducts);

	cartProducts.forEach((cartProduct, index) => {
		productToCart = parseDataCatalogProducts.find((el) => el.id === cartProduct.id);
		productToCart.quantity = cartProduct.quantity;
		if (productToCart !== null) {
			productsInCart.push(productToCart);
			totalPrice += productToCart.price * productToCart.quantity;
		}
	});

	console.log("cartProducts\n", cartProducts);
	console.log("productsInCart\n", productsInCart);
	console.log("totalPrice\n", totalPrice);

	return (
		<>
			<header className="header">
				<div className="header__content container">
					<div className="header__content__l-side">
						<h1>SHOPPING CART</h1>
					</div>
				</div>
			</header>

			<main className="main container">
				<div className="main__l-side">
					<div className="main__l-side__card-box">
						{productsInCart.map((product, index) => {
							return (
								<div key={`cart-product-${index}`} className="main__l-side__card-box__card">
									<button className="main__l-side__card-box__card__close" onClick={() => deleteProduct(product.id)}>
										<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="m11.245 9 6.285-6.285a1.59 1.59 0 0 0-2.245-2.25L9 6.752 2.715.466a1.59 1.59 0 0 0-2.25 2.25L6.752 9 .466 15.285a1.59 1.59 0 0 0 2.25 2.25L9 11.248l6.285 6.285a1.591 1.591 0 0 0 2.25-2.25L11.244 9Z"
												fill="#575757"
											/>
										</svg>
									</button>
									<img src={`./img/${product.img}`} />
									<div className="main__l-side__card-box__card__about">
										<h3>{product.name}</h3>
										<div className="main__l-side__card-box__card__about__parameters">
											<ul>
												Price:
												<span className="main__l-side__card-box__card__about__parameters__price">
													{" "}
													${product.price}
												</span>
											</ul>
											<ul>Color: {product.color}</ul>
											<ul>
												Size:
												<Select
													key={`product-size-select-${product.id}`}
													chooseText={'Choose a size'}
													optionsArr={product.size}
													 />
											</ul>
											<ul className="main__l-side__card-box__card__about__parameters__quantity">
												Quantity:
												<input
													className="main__l-side__card-box__card__about__parameters__quantity__num"
													type="number"
													value={product.quantity}
													onChange={(e) => changeProductQuantity(product.id, e.target.value)}
												/>
											</ul>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					<div className="main__l-side__button-box">
						<button onClick={clearCart}>
							<span className="main__l-side__button-box__text">CLEAR SHOPPING CART</span>
						</button>
						<a href="/catalog.html">
							<button>
								<span className="main__l-side__button-box__text">CONTINUE SHOPPING</span>
							</button>
						</a>
					</div>
				</div>

				<div className="main__r-side">
					<form className="main__r-side__adress-box">
						<h3>SHIPPING ADRESS</h3>
						<input required type="text" placeholder="Bangladesh" />
						<input required type="text" placeholder="State" />
						<input required type="text" placeholder="Postcode / Zip" />
						<button type="submit">GET A QUOTE</button>
					</form>

					<div className="main__r-side__checkout">
						<ul className="main__r-side__checkout__sub-total">
							SUB TOTAL<span className="main__r-side__checkout__sub-total__price">{totalPrice}</span>
						</ul>
						<ul className="main__r-side__checkout__grand-total">
							GRAND TOTAL<span className="main__r-side__checkout__grand-total__price">{totalPrice}</span>
						</ul>
						<hr />
						<button>PROCEED TO CHECKOUT</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default CartPage;
