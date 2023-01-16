import React from "react";
import FifthSection from "../components/FifthSection/FifthSection";
import FirstSection from "../components/FirstSection/FirstSection";
import Footer from "../components/Footer/Footer";
import FourthSection from "../components/FourthSection/FourthSection";
import Header from "../components/Header/Header";
import SecondSection from "../components/SecondSection/SecondSection";
import ThirdSection from "../components/ThirdSection/ThirdSection";
import "./HomePage.css";


export default function HomePage() {
  return (
    <div className="home-page">
      <header><Header /></header>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </main>
      <footer><Footer /></footer>
    </div>
  );
}