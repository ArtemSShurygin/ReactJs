import React from "react";
import { useContext} from "react";
import { useState } from "react";
import { CartContext } from "contexts/CartContext";
//import "styles/style.css";

const MainMenu = () => {
	const [menuActive, setMenuActive] = useState(false);

	const {cartProducts, clearCart } = useContext(CartContext);
	let numOfProducts = cartProducts.length;
	return (
		<>
			<nav className="main_nav-background">
				<div className="main_nav container">
					<div className="main_nav-block1">
						<a href="/">
							<img src="img/nav1.png" alt="main page" />{" "}
						</a>
						<button onClick={clearCart}>
							<img src="img/nav2.png" alt="navigation" />
						</button>
					</div>
					<div className="main_nav-block2">
						<button className="burger" onClick={() => setMenuActive(!menuActive)}>
							<img src="img/nav3.png" alt="navigation" />
						</button>
						<a href="/registration.html" className="hidden">
							<img src="img/nav4.png" alt="navigation" />
						</a>
						<a href="/cart.html" className="hidden">
							<img src="img/nav5.png" alt="navigation" />
						</a>
						<div className="main_nav-block2-sales hidden">
							<span>{numOfProducts}</span>
						</div>
					</div>
				</div>
			</nav>

			<nav className={menuActive ? "menu" : "menu menu-hidden"}>
				<div className="menu_close">
					<button onClick={() => setMenuActive(false)}>
						<svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="m7.416 6.004 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"
								fill="#6F6E6E"
							/>
						</svg>
					</button>
				</div>

				<h2>MENU</h2>
				<ul>
					<a href="/">index</a>
				</ul>
				<ul>
					<a href="product.html">product</a>
				</ul>
				<ul>
					<a href="catalog.html">catalog</a>
				</ul>
				<ul>
					<a href="cart.html">cart</a>
				</ul>
				<ul>
					<a href="registration.html">registration</a>
				</ul>
				<div className="menu_section">
					<div className="menu_section_type">
						<a href="#">MAN</a>
					</div>
					<div className="menu_section_products">
						<ul>
							<a href="#">Accessories</a>
						</ul>
						<ul>
							<a href="#">Bags</a>
						</ul>
						<ul>
							<a href="#">Denim</a>
						</ul>
						<ul>
							<a href="#">T-Shirts</a>
						</ul>
					</div>
				</div>

				<div className="menu_section">
					<div className="menu_section_type">
						<a href="#">WOMAN</a>
					</div>
					<div className="menu_section_products">
						<ul>
							<a href="#">Accessories</a>
						</ul>
						<ul>
							<a href="#">Jackets &amp;&nbsp;Coats</a>
						</ul>
						<ul>
							<a href="#">Polos</a>
						</ul>
						<ul>
							<a href="#">T-Shirts</a>
						</ul>
						<ul>
							<a href="#">Shirts</a>
						</ul>
					</div>
				</div>

				<div className="menu_section">
					<div className="menu_section_type">
						<a href="#">KIDS</a>
					</div>
					<div className="menu_section_products">
						<ul>
							<a href="#">Accessories</a>
						</ul>
						<ul>
							<a href="#">Jackets &amp;&nbsp;Coats</a>
						</ul>
						<ul>
							<a href="#">Polos</a>
						</ul>
						<ul>
							<a href="#">T-Shirts</a>
						</ul>
						<ul>
							<a href="#">Shirts</a>
						</ul>
						<ul>
							<a href="#">Bags</a>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default MainMenu;
