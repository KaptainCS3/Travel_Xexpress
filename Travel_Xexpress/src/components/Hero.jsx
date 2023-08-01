import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import carouselList from "../../carouselList.js";
const Hero = ({ autoSlide = true, autoSlideInterval = 5000 }) => {
  const [index, setIndex] = useState(0);
  const { imageSrc, id, title, content } = carouselList[index];
  // This function helps us check and make sure we dont go above the lenght of our array and below its lenght
  const checkNumber = (number) => {
    if (number > carouselList.length - 1) {
      return 0;
    }
    if (number < 0) return carouselList.length - 1;
    return number;
  };

  // This function help us in moving to the previous element
  const prevItem = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // This function help us in moving to the next element
  const nextItem = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextItem, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <section className="sm:w-full overflow-hidden relative">
        <div className="w-full flex transition-all duration-500 ease-in-out">
          <div className="w-full flex h-full">
            <img src={imageSrc} alt={id} className="w-full h-full" />
          </div>
          <div className="absolute top-0 left-0 flex h-full justify-between px-2 items-center w-full lg:px-[5rem] modal">
            <button
              className="prev-btn cursor-pointe font-bold text-3xl  h-full text-white outline-none"
              onClick={prevItem}
            >
              {/* color: #fff;
  background-color: #0e0e0e;
  border-color: #080808; 
  .btn-dark {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}*/}
              <span className="bg-[#212121] border border-[#212121] px-3 py-2 hover:bg-[#0e0e0e] hover:border-[#080808]">
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
            </button>
            <div className="flex justify-center w-[90%] items-center flex-col text-center">
              <h1 className="hero_header font-[600] text-white uppercase sm:text-xl">
                {title}
              </h1>
              <h3 className="hero_content font-bold text-white sm:text-2xl">
                {content}
              </h3>
              <div className="">
                <button className="py-4 px-10 bg-[#7AB730] text-white hover:bg-[#5F8F25] sm:px-4 sm:py-3 sm:mt-1">
                  Book Now
                </button>
              </div>
            </div>
            <button
              className="next-btn cursor-pointer font-bold text-3xl h-full text-white outline-none"
              onClick={nextItem}
            >
              <span className="bg-[#212121] border border-[#212121] px-3 py-2 hover:bg-[#0e0e0e] hover:border-[#080808]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
