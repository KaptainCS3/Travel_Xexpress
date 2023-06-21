import React from "react";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Budget from "../components/Budget";
import Offer from "../components/Offer";
import Guide from "../components/Guide";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <div className="mb-32">
        <AboutMe />
      </div>
      <div className="mb-32">
        <Budget />
      </div>
      <div className="mb-32">
        <Offer />
      </div>
      <div className="mb-24">

      <Guide />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
