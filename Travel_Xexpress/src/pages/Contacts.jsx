import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import Contact from "../components/Contact";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";

const Contacts = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="lg:mb-32 lg:mt-64">
        <Contact />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Contacts;
