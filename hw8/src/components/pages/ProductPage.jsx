import React from "react";
import dataProductProducts from "data/productProducts";
import Product from "components/Product";
import "styles/style_product.css";

const ProductPage = () => {
  const productsOnDisplay = JSON.parse(dataProductProducts);
  console.log(productsOnDisplay);
	return (
		<>
			<div className="header">
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
			</div>

			<main>
				<section className="product">
					<div className="product__img">
						<button>
							<svg width="13" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.7 3.75 4.95 11.5l7.75 7.75-1.55 3.1L.3 11.5 11.15.65l1.55 3.1Z" fill="#000" />
							</svg>
						</button>
						<button>
							<svg width="13" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="m.3 19.25 7.75-7.75L.3 3.75 1.85.65 12.7 11.5 1.85 22.35.3 19.25Z" fill="#000" />
							</svg>
						</button>
					</div>
					<div className="product__about container">
						<h2>WOMEN COLLECTION</h2>
						<hr className="product__about__hr1" />
						<h3>MOSCHINO CHEAP AND CHIC</h3>
						<p className="product__about__discription">
							Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate
							collaborative architectures before cutting-edge services. Completely visualize parallel core competencies
							rather than exceptional portals.
						</p>
						<p className="product__about__price">$561</p>
						<hr className="product__about__hr2" />
						<div className="product__about__sort">
							<button>
								CHOOSE COLOR
								<svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"
										fill="#6F6E6E"
									/>
								</svg>
							</button>
							<button>
								CHOOSE SIZE
								<svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"
										fill="#6F6E6E"
									/>
								</svg>
							</button>
							<button>
								QUANTITY
								<svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"
										fill="#6F6E6E"
									/>
								</svg>
							</button>
						</div>
						<button className="product__about__add">
							<svg width="27" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.498 22.185c.008-.433.143-.854.387-1.21.244-.356.588-.632.987-.792a2.163 2.163 0 0 1 2.362.502 2.204 2.204 0 0 1 .454 2.39c-.166.4-.445.741-.803.98-.357.24-.777.369-1.207.369a2.184 2.184 0 0 1-1.55-.664 2.22 2.22 0 0 1-.63-1.575Zm15.806 2.239a2.205 2.205 0 0 1-1.224-.35 2.233 2.233 0 0 1-.833-.971 2.256 2.256 0 0 1 .388-2.428 2.202 2.202 0 0 1 3.397.149c.264.347.421.764.453 1.2a2.274 2.274 0 0 1-.53 1.628 2.167 2.167 0 0 1-1.49.773l-.16-.001Zm-12.71-6.939a.96.96 0 0 1-.587-.202.973.973 0 0 1-.343-.52L3.737 2.194H.979a.974.974 0 0 1-.692-.289.991.991 0 0 1 0-1.395.974.974 0 0 1 .692-.29h3.479a.96.96 0 0 1 .586.203c.168.13.289.314.344.52l3.927 14.568h10.704l3.558-8.385H11.717a.974.974 0 0 1-.691-.29.991.991 0 0 1 0-1.395.974.974 0 0 1 .692-.289h13.335a.945.945 0 0 1 .8.445 1.014 1.014 0 0 1 .08.937l-4.392 10.358a.97.97 0 0 1-.882.592H8.594Z"
									fill="#EF5B70"
								/>
							</svg>
							Add to Cart
						</button>
					</div>
				</section>

				<section className="card-list container mob-tub-last-hidden">
        {productsOnDisplay.map((product) => (
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
			</main>
		</>
	);
};

export default ProductPage;
