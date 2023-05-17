import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import BookTravel from "./components/BookTravel";
import Tourist from "./components/Tourist";
import About from "./components/About";
import Budget from "./components/Budget";
import Explore from "./components/Explore";
import Service from "./components/Service";
import PackageTour from "./components/Package";
import Offer from "./components/Offer";
import Guide from "./components/Guide";
import BlogPost from "./components/BlogPost";
const App = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] font">
        <Nav />
        <Hero />
        <BookTravel />
        <Tourist />
        <About />
        <Budget />
        <Explore />
        <Service />
        <PackageTour />
        <Offer />
        <Guide />
        <BlogPost />
      </div>
    </>
  );
};

export default App;
