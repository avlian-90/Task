import React from "react";
import FooterImg from "../../assets/footerImg.png";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="container footer__container">
            <div className="footer__info">
                <p className="footer__sale">Save 50% Now</p>
                <button className="footer__btn">GET MY DISCOUNT</button>
            </div>
            <div className="footer__img">
              <img src={FooterImg} alt=""/>
            </div>
        </div>
    </div>
  );
}