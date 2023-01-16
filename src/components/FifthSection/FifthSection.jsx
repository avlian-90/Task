import React from "react";
import Comp1 from "../../assets/comp1.png";
import Comp2 from "../../assets/comp2.png";
import Comp3 from "../../assets/comp3.png";
import Comp4 from "../../assets/comp4.png";
import Comp5 from "../../assets/comp5.png";
import Comp6 from "../../assets/comp6.png";
import Comp7 from "../../assets/comp7.png";
import Comp8 from "../../assets/comp8.png";
import Comp9 from "../../assets/comp9.png";
import "./FifthSection.css"

export default function FifthSection() {
  return (
    <div class="fifth-section">
        <h2 class="title">Trusted by 1000+ Companies</h2>
        <div class="container companies__container">
            <img src={Comp1} alt="it-pros"/>
            <img src={Comp2} alt="shanab-pharma"/>
            <img src={Comp3} alt="honest-commerce"/>
            <img src={Comp4} alt="formbuilder."/>
            <img src={Comp5} alt="compass inc"/>
            <img src={Comp6} alt="va"/>
            <img src={Comp7} alt="hakvoort prof"/>
            <img src={Comp8} alt="saeculum"/>
            <img src={Comp9} alt="net glory"/>
        </div>
    </div>
  );
}