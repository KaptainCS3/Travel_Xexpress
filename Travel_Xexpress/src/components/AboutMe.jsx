import React from "react";
import Tourist from "../components/Tourist";
import About from "../components/About";
const AboutMe = () => {
  return (
    <div className="lg:relative lg:w-[82.5%] lg:mx-auto lg:mt-32 lg:flex lg:min-h-[100vh] md:mx-8">
      <Tourist />
      <About />
    </div>
  );
};

export default AboutMe;
