import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import "App.css";
import MainMenu from "components/MainMenu";
import Footer from "components/Footer";
import Subscribe from "components/Subscribe";
import CatalogPage from "components/pages/CatalogPage";
import CartPage from "components/pages/CartPage";
import IndexPage from "components/pages/IndexPage";
import ProductPage from "components/pages/ProductPage";
import RegistrationPage from "components/pages/RegistrationPage";
import { CartContextProvider } from "contexts/CartContext";

function App() {
	return (
		<CartContextProvider>
		<div className="App">
			<Router>
				<MainMenu />
				<Routes>
          <Route path="/" element={<IndexPage />}></Route>
					<Route path="/cart.html" element={<CartPage />}></Route>
					<Route path="/catalog.html" element={<CatalogPage />}></Route>
					<Route path="/product.html" element={<ProductPage />}></Route>
					<Route path="/registration.html" element={<RegistrationPage />}></Route>
				</Routes>
        <Subscribe />
				<Footer />
			</Router>
		</div>
		</CartContextProvider>
	);
}

export default App;
