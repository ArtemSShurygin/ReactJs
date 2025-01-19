import React from "react";
import dataIndexProducts from "data/indexProducts";
import "styles/style.css";
import Product from "components/Product";
import Feature from "components/Feature";

const IndexPage = () => {

	const parseDataIndexProducts = JSON.parse(dataIndexProducts);
	console.log(parseDataIndexProducts);

	return (
		<div>
			<header className="main_content">
				<div className="main_content-left hidden">
					<img src="img/header.png" alt="header" />
				</div>
				<div className="main_content-right">
					<h1>
						<span className="main_content-title_p1">THE BRAND</span> <br />
						<span className="main_content-title_p2">
							OF LUXERIOUS <span className="main_content-title_p3">FASHION</span>
						</span>
					</h1>
				</div>
			</header>

			<section className="card_list1 container">
				<div className="card_list1-card_img1">
					<div className="card_list1-card_background">
						<div className="card_list1-card_text">
							<h3>30% OFF</h3>
							<h2>FOR WOMEN</h2>
						</div>
					</div>
				</div>
				<div className="card_list1-card_img2">
					<div className="card_list1-card_background">
						<div className="card_list1-card_text">
							<h3>HOT DEAL</h3>
							<h2>FOR MEN</h2>
						</div>
					</div>
				</div>
				<div className="card_list1-card_img3">
					<div className="card_list1-card_background">
						<div className="card_list1-card_text">
							<h3>NEW ARRIVALS</h3>
							<h2>FOR KIDS</h2>
						</div>
					</div>
				</div>
				<div className="card_list1-card_img4">
					<div className="card_list1-card_background">
						<div className="card_list1-card_text">
							<h3>LUXIROUS &amp;&nbsp;TRENDY</h3>
							<h2>ACCESORIES</h2>
						</div>
					</div>
				</div>
			</section>

			<section className="products container">
				<div className="products-about">
					<h2>Fetured Items</h2>
					<p>Shop for items based on what we featured in this week</p>
				</div>

				<div className="card_list2">
					{parseDataIndexProducts.map((product) => (
						<Product
              key={product.id}
							id={product.id}
							name={product.name}
							description={product.description}
							price={product.price}
							img={"./img/" + product.img}
						/>
					))}
				</div>

				<div className="products-button">
        <a href="/catalog.html"><button>Browse All Product</button></a>
				</div>
			</section>
      <Feature/>
		</div>
	);
};

export default IndexPage;
