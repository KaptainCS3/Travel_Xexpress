import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
const Destinations = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="mt-48 mb-24">
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
