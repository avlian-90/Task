import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css"

export default function Header() {
  return (
    <div className="header__container">
        <a href="#">
            <img src={Logo} alt="Logo"/>
        </a>
        <button className="header__btn">
            GET NOW
        </button>
    </div>
  );
}