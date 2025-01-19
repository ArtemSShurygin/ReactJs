import React from "react";
import dataIndexProducts from "data/indexProducts";
import "styles/style.css";
import "styles/style_registration.css";

const RegistrationPage = () => {
	return (
		<>
			<header className="header">
				<div className="header__content container">
					<div className="header__content__l-side">
						<h1>REGISTRATION</h1>
					</div>
				</div>
			</header>

			<main>
				<div className="content container">
					<div className="content__l-side">
						<form className="registration-form">
							<div className="registration-box">
								<h3 className="registration-box__heading">Your Name</h3>
								<input className="registration-box__input" required type="text" placeholder="First Name" />
								<input className="registration-box__input" required type="text" placeholder="Last Name" />
							</div>

							<div className="registration-form__gender-box gender-box">
								<p className="gender-box__gender">
									<input type="radio" value="male" name="gender" />
									Male
								</p>
								<p className="gender-box__gender">
									<input type="radio" value="female" name="gender" />
									Female
								</p>
								<p className="gender-box__gender">
									<input type="radio" value="other" name="gender" />
									Other
								</p>
							</div>

							<div className="registration-box">
								<h3 className="registration-box__heading">Login details</h3>
								<input className="registration-box__input" required type="text" placeholder="First Name" />
								<input className="registration-box__input" required type="text" placeholder="Last Name" />
							</div>

							<p className="registration-form__password-about">
								Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
							</p>

							<button className="registration-form__button">
								JOIN NOW
								<svg width="17" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.54.208a.709.709 0 0 1 1.003 0l4.25 4.25a.708.708 0 0 1 0 1.003l-4.25 4.25a.71.71 0 0 1-1.003-1.003l3.75-3.749-3.75-3.748a.708.708 0 0 1 0-1.003Z"
										fill="#fff"
									/>
									<path
										d="M0 4.96a.708.708 0 0 1 .708-.709h14.875a.708.708 0 0 1 0 1.417H.708A.708.708 0 0 1 0 4.959Z"
										fill="#fff"
									/>
								</svg>
							</button>
						</form>
					</div>
					<div className="content__r-side">
						<div className="loyalty">
							<h3 className="loyalty__heading">LOYALTY HAS ITS PERKS</h3>
							<p className="loyalty__about">
								Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as
								soon as you join:
							</p>
							<div className="loyalty__ul-box">
								<ul className="loyalty__ul">
									<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.803 0H18.09a.777.777 0 0 0-.615.303L7.37 13.283 2.525 7.058a.786.786 0 0 0-.615-.304H.196a.199.199 0 0 0-.154.32l6.713 8.624a.78.78 0 0 0 1.233 0L19.958.318A.197.197 0 0 0 19.804 0Z"
											fill="#000"
										/>
									</svg>
									15% off welcome offer
								</ul>
								<ul className="loyalty__ul">
									<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.803 0H18.09a.777.777 0 0 0-.615.303L7.37 13.283 2.525 7.058a.786.786 0 0 0-.615-.304H.196a.199.199 0 0 0-.154.32l6.713 8.624a.78.78 0 0 0 1.233 0L19.958.318A.197.197 0 0 0 19.804 0Z"
											fill="#000"
										/>
									</svg>
									Free shipping, returns and exchanges on all orders
								</ul>
								<ul className="loyalty__ul">
									<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.803 0H18.09a.777.777 0 0 0-.615.303L7.37 13.283 2.525 7.058a.786.786 0 0 0-.615-.304H.196a.199.199 0 0 0-.154.32l6.713 8.624a.78.78 0 0 0 1.233 0L19.958.318A.197.197 0 0 0 19.804 0Z"
											fill="#000"
										/>
									</svg>
									$10 off a purchase on your birthday
								</ul>
								<ul className="loyalty__ul">
									<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.803 0H18.09a.777.777 0 0 0-.615.303L7.37 13.283 2.525 7.058a.786.786 0 0 0-.615-.304H.196a.199.199 0 0 0-.154.32l6.713 8.624a.78.78 0 0 0 1.233 0L19.958.318A.197.197 0 0 0 19.804 0Z"
											fill="#000"
										/>
									</svg>
									Early access to products
								</ul>
								<ul className="loyalty__ul">
									<svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.803 0H18.09a.777.777 0 0 0-.615.303L7.37 13.283 2.525 7.058a.786.786 0 0 0-.615-.304H.196a.199.199 0 0 0-.154.32l6.713 8.624a.78.78 0 0 0 1.233 0L19.958.318A.197.197 0 0 0 19.804 0Z"
											fill="#000"
										/>
									</svg>
									Exclusive offers &amp;&nbsp;rewards
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default RegistrationPage;
