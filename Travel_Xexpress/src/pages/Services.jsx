import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import Service from "../components/Service";
import ServicesCard from "../components/ServicesCard";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
const Services = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div className="my-32">
        <Service />
        <section className="lg:w-[82.5%] mx-auto">
          <ServicesCard />
        </section>
      </div>
      <div className="mb-32">{/* <Offer /> */}</div>
      <div className="mb-24">{/* <Guide /> */}</div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Services;
