import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import Testimonial from "../components/Testimonial";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
const Testimonials = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="mt-48 mb-24">
        <Testimonial />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Testimonials;
