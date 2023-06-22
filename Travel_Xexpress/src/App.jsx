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
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] font">
        <Nav />
        <Hero />
        <BookTravel />
        <AboutMe />
        <Budget />
        <Explore />
        <Service />
        <PackageTour />
        <Offer />
        <Guide />
        <Testimonial />
        <BlogPost />
        <Footer />
      </div>
    </>
  );
};

export default App;
