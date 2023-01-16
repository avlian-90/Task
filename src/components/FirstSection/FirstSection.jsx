import React from "react";
import Checked from "../../assets/checked.png";
import Stars from "../../assets/stars.png";
import Capterra from "../../assets/capterra.png";
import Crowd from "../../assets/crowd.png";
import GetApp from "../../assets/getApp.png";
import Discount from "../../assets/discount.png";
import "./FirstSection.css"

export default function FirstSection() {
  return (
    <div className="fs__container">
        <div className="fs__infoblock">
            <h1 className="fs__title"><span> CYBER MONDAY </span> means 
                an even <span> bigger sale </span></h1>
            <p className="fs__slogan">Cyber Monday saves you money,
                WebWork saves you time.</p>
            <button className="fs__btn">SAVE BIG NOW</button>
            <div className="fs__ft">
                <img src={Checked} alt="tick"/>
                <p className="fs__ft_text">14-day free trial <span></span> No credit card required</p>
            </div>
            <div className="fs__review">
                <img src={Stars} alt="Review Stars"/>
                <p className="fs__review_text">Reviews from <span>51K+</span> happy users below and beyond</p>
            </div>
            <div className="fs__companies">
                <img src={Capterra} alt="Capterra"/>
                <img src={Crowd} alt="Crowd"/>
                <img src={GetApp} alt="GetApp"/>
            </div>
        </div>
        <div className="fs__discount">
            <img src={Discount} alt=""/>
        </div>
    </div>
  );
}