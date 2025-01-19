import React from "react";
//import '../styles/style.css'

const Subscribe = () => {
  return (
  <div className="footer__subscribe">
    <div className="footer__subscribe__background_color">
      <div className="footer__subscribe__content container">
        <div className="footer__subscribe__info">
          <img src="img/subscribe_photo.png" alt="photo" />
          <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
        </div>
        <div className="footer__subscribe__subscribe">
          <h2>SUBSCRIBE</h2>
          <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
          <form className="footer__subscribe__form">
            <input required type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );}

export default Subscribe;