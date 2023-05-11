import React from "react";
import carouselList from "../../carouselList.js";
const Hero = () => {
  return (
    <>
      <section className="sm:w-full border overflow-hidden">
        <div className="w-full flex">
          <div className="inline w-full">
            <img src="../../public/assets/carousel-1.jpg" className="w-full w-min-32"/>
          </div>
          <div className="inline w-full">
            <img src="../../public/assets/carousel-2.jpg" className="w-full"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

//  <div className="relative w-full">
//    <div className="flex">
//      {carouselList.map((el) => (
//        <div className="flex">
//          <div className="w-[30rem]">
//            <img src={el.imageSrc} alt="" className="w-full" />
//          </div>
//          <h1>{el.title}</h1>
//          <p>{el.content}</p>
//        </div>
//      ))}
//    </div>
//  </div>;
