import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import Guide from "../components/Guide";
import GuideList from "../components/GuideList";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
const Guides = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="mt-48">
        <Guide />
      </div>
      <section className="lg:w-[82.5%] mx-auto mb-24">
        {" "}
        <div className="flex flex-col justify-center items-center">
          <GuideList />
        </div>
      </section>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Guides;
