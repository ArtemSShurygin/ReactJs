import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

	const addToCart = (productId) => {
		let foundIndex = cartProducts.findIndex((el) => el.id == productId);
		if (foundIndex !== -1) {
			cartProducts[foundIndex].quantity++;
			setCartProducts([...cartProducts]);
		} else {
			setCartProducts([...cartProducts, { id: productId, quantity: 1 }]);
		}
	};

	const changeProductQuantity = (productId, newQuantity) => {
		let foundIndex = cartProducts.findIndex((el) => el.id == productId);
		if (foundIndex !== -1  ) {
				if (newQuantity < 1) {
					newQuantity = 1;
			}
      cartProducts[foundIndex].quantity = parseInt(newQuantity);
		}
		setCartProducts([...cartProducts]);
	};

	const deleteProduct = (productId) => {
		let foundIndex = cartProducts.findIndex((el) => el.id == productId);
		if (foundIndex !== -1) {
			cartProducts.splice(foundIndex, 1);
		}
		setCartProducts([...cartProducts]);
	};

	const clearCart = () => {
		setCartProducts([]);
	};

	useEffect(() => {
		localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
	}, [cartProducts]);
	return (
		<CartContext.Provider
			value={{
				cartProducts,
				addToCart,
				changeProductQuantity,
				deleteProduct,
				clearCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export { CartContext, CartContextProvider };
