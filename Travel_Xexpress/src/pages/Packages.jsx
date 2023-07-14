import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import Package from "../components/Package";
import Explore from "../components/Explore";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
const Packages = ({header}) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <div className="mb-[12rem]">

      <Header header={header} />
      <BookTravel />
      </div>
      <div className="mb-24">
        <Package />
      </div>
      <div className="mb-24">
        <Explore />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Packages;
