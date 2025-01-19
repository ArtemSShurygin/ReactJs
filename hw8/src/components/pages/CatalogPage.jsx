import React from "react";
import { useState } from "react";
import dataCatalogProducts from "data/catalogProducts";
import "styles/style_catalog.css";
import Feature from "components/Feature";
import Product from "components/Product";

const CatalogPage = () => {
	const parseDataCatalogProducts = JSON.parse(dataCatalogProducts);

	//Фильтр размеров
	const names = ["XS", "S", "M", "L"];
	let sizesOnDisplay = [];
	let pruductOnDysplay = [];
	const [checkedState, setCheckedState] = useState(new Array(names.length).fill(false));

	const handleOnChange = (position, checkboxNames = names) => {
		let names = checkboxNames;
		const updatedCheckedState = checkedState.map((item, index) => {
			if (index === position) {
				if (item === false) {
					return names[index];
				} else {
					return false;
				}
			}
			return item;
		});

		setCheckedState(updatedCheckedState);
	};


sizesOnDisplay=checkedState.filter(Boolean);

	if (sizesOnDisplay.length === 0) {
		pruductOnDysplay = parseDataCatalogProducts;
	} else {
		parseDataCatalogProducts.forEach(product => {
			if(product.size.some(el=> sizesOnDisplay.includes(el))) {
				pruductOnDysplay.push(product)
			}
		});
	}

	console.log('checkedState\n',checkedState);
	console.log('sizesOnDisplay \n', sizesOnDisplay);
	console.log('pruductOnDysplay \n', pruductOnDysplay);

	return (
		<>
			<header className="header">
				<div className="header__content container">
					<div className="header__content__l-side">
						<h1>NEW ARRIVALS</h1>
					</div>
					<div className="header__content__breadcrumb">
						<a href="#">HOME</a>
						<a href="#">MEN</a>
						<a href="#">NEW ARRIVALS</a>
					</div>
				</div>
			</header>

			<article className="filter container">
				<details className="filter__content">
					<summary className="filter__content__summary">
						<span className="filter__content__summary__heading mobile-hidden">FILTER</span>
						<svg width="15" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M.833 10h3.334A.836.836 0 0 0 5 9.167a.836.836 0 0 0-.833-.834H.833A.836.836 0 0 0 0 9.167c0 .458.375.833.833.833ZM0 .833c0 .459.375.834.833.834h13.334A.836.836 0 0 0 15 .833.836.836 0 0 0 14.167 0H.833A.836.836 0 0 0 0 .833Zm.833 5h8.334A.836.836 0 0 0 10 5a.836.836 0 0 0-.833-.833H.833A.836.836 0 0 0 0 5c0 .458.375.833.833.833Z"
								fill="#000"
							/>
						</svg>
					</summary>
					<details className="filter__content__item">
						<summary className="filter__content__item__summary">CATEGORY</summary>
						<div className="filter__content__item__link-box">
							<a href="#">Accessories</a>
							<a href="#">Bags</a>
							<a href="#">Denim</a>
							<a href="#">Hoodies &amp;&nbsp;Sweatshirts</a>
							<a href="#">Jackets &amp;&nbsp;Coats</a>
							<a href="#">Polos</a>
							<a href="#">Shirts</a>
							<a href="#">Shoes</a>
							<a href="#">Sweaters &amp;&nbsp;Knits</a>
							<a href="#">T-Shirts</a>
							<a href="#">Tanks</a>
						</div>
					</details>
					<details className="filter__content__item">
						<summary className="filter__content__item__summary">BRAND</summary>
						<div className="filter__content__item__link-box">
							<a href="#">Accessories</a>
							<a href="#">Bags</a>
							<a href="#">Denim</a>
							<a href="#">Hoodies &amp;&nbsp;Sweatshirts</a>
							<a href="#">Jackets &amp;&nbsp;Coats</a>
							<a href="#">Polos</a>
							<a href="#">Shirts</a>
							<a href="#">Shoes</a>
							<a href="#">Sweaters &amp;&nbsp;Knits</a>
							<a href="#">T-Shirts</a>
							<a href="#">Tanks</a>
						</div>
					</details>
					<details className="filter__content__item">
						<summary className="filter__content__item__summary">DESIGNER</summary>
						<div className="filter__content__item__link-box">
							<a href="#">Accessories</a>
							<a href="#">Bags</a>
							<a href="#">Denim</a>
							<a href="#">Hoodies &amp;&nbsp;Sweatshirts</a>
							<a href="#">Jackets &amp;&nbsp;Coats</a>
							<a href="#">Polos</a>
							<a href="#">Shirts</a>
							<a href="#">Shoes</a>
							<a href="#">Sweaters &amp;&nbsp;Knits</a>
							<a href="#">T-Shirts</a>
							<a href="#">Tanks</a>
						</div>
					</details>
				</details>
				<div className="filter__sort">
					<details className="filter__sort__item">
						<summary className="filter__sort__item__summary">
							TRENDING&nbsp;NOW
							<svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
									fill="#6F6E6E"
								/>
							</svg>
						</summary>
					</details>
					<details className="filter__sort__item">
						<summary className="filter__sort__item__summary">
							SIZE
							<svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
									fill="#6F6E6E"
								/>
							</svg>
						</summary>
						<div className="filter__sort__item__box">
							{names.map((name, index) => {
								return (
									<div key={`sort-${index}`} className="filter__sort__item__box__check">
										<input
											id={`sort__check-${index}`}
											type="checkbox"
											checked={checkedState[index]}
											onChange={() => handleOnChange(index)}
										/>
										<label htmlFor="#">{name}</label>
									</div>
								);
							})}
						</div>
					</details>
					{/* <Filter names={['XS','S','M','L']}/> */}
					<details className="filter__sort__item">
						<summary className="filter__sort__item__summary">
							PRICE
							<svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
									fill="#6F6E6E"
								/>
							</svg>
						</summary>
					</details>
				</div>
			</article>

			<section className="card-list container mob-tub-9-hidden">
				{pruductOnDysplay.map((product) => (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.description}
						price={product.price}
						img={"./img/" + product.img}
					/>
				))}
			</section>

			<nav className="page container">
				<a className="page__previous-next" href="#">
					<svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="m7.995 2-5 5 5 5-1 2-7-7 7-7 1 2Z" fill="#000" />
					</svg>
				</a>
				<div className="page__number-box">
					<a href="#">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a>
					<a href="#">6</a>
					<a href="#">...</a>
					<a href="#">20</a>
					<a className="page__previous-next" href="">
						<svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="m-.005 12 5-5-5-5 1-2 7 7-7 7-1-2Z" fill="#000" />
						</svg>
					</a>
				</div>
			</nav>
			<Feature />
		</>
	);
};

export default CatalogPage;
