import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import AboutMe from "../components/AboutMe";
import Budget from "../components/Budget";
import Offer from "../components/Offer";
import Guide from "../components/Guide";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
const AboutUs = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="">
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
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default AboutUs;
