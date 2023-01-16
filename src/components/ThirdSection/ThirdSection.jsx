import React from "react";
import Partners from "../../assets/partners.png";
import "./ThirdSection.css"

export default function ThirdSection() {
  return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <img src={Partners} alt="partners"/>
            </div>
        </div>
  );
}