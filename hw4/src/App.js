import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NoPage from "./components/NoPage";

function App() {
	return (
		<Router>
			<nav className="container nav">
				<Link to="/">Главная страница</Link>
				<Link to="/about">О нас</Link>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="*" element={<NoPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
