import React from "react";
import Checked2 from "../../assets/checked2.png";
import "./SecondSection.css"

export default function SecondSection() {
  return (
    <div className="second-section">
        <h2 class="title sub__title">Benefit both ways - <span>monthly or yearly</span></h2>
        <div class="container subs__container">
            <figure class="sub__card">
                <figcaption class="sub__time">Monthly</figcaption>
                <p class="sub__price">$2.49</p>
                <p class="sub__pum">per user/month</p>
                <div class="sub__tick">
                    <img src={Checked2} alt="greentick"/>
                    <p class="sub__feature">14-day Free Trial</p>
                </div>
                <div class="sub__tick">
                    <img src={Checked2} alt="greentick"/>
                    <p class="sub__feature">Access to All Features</p>
                </div>
                <div class="sub__tick">
                    <img src={Checked2} alt="greentick"/>
                    <p class="sub__feature">24/7 Support</p>
                </div>
                <button class="sub__btn">
                    GET YOUR DEAL
                </button>
                <p class="sub__dur">*for 6 months</p>
                <div class="sub__discount">
                    <p>50%</p>
                </div>
                <div class="sub__neon blue_sub__neon">
                </div>
            </figure>
            <figure class="sub__card">
                <figcaption class="sub__time">Yearly</figcaption>
                <p class="sub__price y_sub__price">$2.05</p>
                <p class="sub__pum">per user/month</p>
                <div class="sub__tick">
                    <img src={Checked2} alt="greentick"/>
                    <p class="sub__feature">14-day Free Trial</p>
                </div>
                <div class="sub__tick">
                    <img src={Checked2} alt="greentick"/>
                    <p class="sub__feature">Access to All Features</p>
                </div>
                <div class="sub__tick">
                    <img src={Checked2} alt="greentick"/>
                    <p class="sub__feature">24/7 Support</p>
                </div>
                <button class="sub__btn">
                    GET YOUR DEAL
                </button>
                <div class="sub__discount">
                    <p>18%+
                        50%</p>
                </div>
                <div class="sub__neon red_sub__neon">
                </div>
            </figure>
        </div>
    </div>
  );
}