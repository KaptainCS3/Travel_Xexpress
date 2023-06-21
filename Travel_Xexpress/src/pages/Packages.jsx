import React from "react";
import Nav from "../components/Nav";
import Package from "../components/Package";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
const Packages = () => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <div className="mb-24">
        <Package />
      </div>
      <div className="mb-24">
        <Explore />
      </div>
      {/* <div className="mb-32"><Offer /></div> */}
      {/* <div className="mb-24"><Guide /></div> */}
      <Footer />
    </div>
  );
};

export default Packages;
