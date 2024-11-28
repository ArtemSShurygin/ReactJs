import { Provider } from "react-redux";

import store from "./store/index";
import ProductList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import ChangeProduct from "./components/ChangeProduct";
import "./App.css";

function App() {
	return (
		<div className="container">
			<h1 className="title">Catalog</h1>
			<Provider store={store}>
				<ProductList />
				<AddProduct />
        <ChangeProduct />
			</Provider>
		</div>
	);
}

export default App;
