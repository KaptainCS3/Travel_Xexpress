import React from "react";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookTravel from "../components/BookTravel";
import Header from "../components/Header";

const Contacts = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="lg:mb-32 lg:mt-64">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
