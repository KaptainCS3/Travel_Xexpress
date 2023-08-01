import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import BookTravel from "./components/BookTravel";
import AboutMe from "./components/AboutMe";
import Budget from "./components/Budget";
import Explore from "./components/Explore";
import Service from "./components/Service";
import PackageTour from "./components/Package";
import Offer from "./components/Offer";
import Guide from "./components/Guide";
import Testimonial from "./components/Testimonial";
import BlogPost from "./components/BlogPost";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] font">
        <Nav />
        <div className="relative">
          <Hero autoSlide={true} autoSlideInterval={5000} />
          <div className="lg:-bottom-[7.8rem] relative md:-bottom-[9.4rem]">
            <BookTravel />
          </div>
        </div>
        <AboutMe />
        <Budget />
        <Explore />
        <Service />
        <PackageTour />
        <Offer />
        <Guide />
        <Testimonial />
        <BlogPost />
        <ScrollTop />
        <Footer />
      </div>
    </>
  );
};

export default App;
