import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = () => {
  return (
    <div className="md:flex md:flex-wrap md:justify-between lg:flex lg:justify-between lg:w-full">
      <section className="mb-4 flex w-full flex-col justify-center items-center md:max-w-full lg:w-full">
        <h2 className="self-start tracking-[0.4rem] line-h uppercase font-bold text-[#212121] text-[1.6rem] mb-6">
          CATEGORIES
        </h2>
        <div className="w-full p-8 bg-white">
          <div className="flex justify-between items-center py-2 cursor-pointer">
            <div>
              <span className="pr-2 text-[#7AB730]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="hover:underline">Web Design</span>
            </div>
            <span className="px-[0.3rem] text-white bg-[#7AB730]">150</span>
          </div>
          <div className="flex justify-between items-center py-2 cursor-pointer">
            <div>
              <span className="pr-2 text-[#7AB730]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="hover:underline">Web Development</span>
            </div>
            <span className="px-[0.3rem] text-white bg-[#7AB730]">131</span>
          </div>
          <div className="flex justify-between items-center py-2 cursor-pointer">
            <div>
              <span className="pr-2 text-[#7AB730]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="hover:underline">Online Marketing</span>
            </div>
            <span className="px-[0.3rem] text-white bg-[#7AB730]">78</span>
          </div>
          <div className="flex justify-between items-center py-2 cursor-pointer">
            <div>
              <span className="pr-2 text-[#7AB730]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="hover:underline">Keyword Research</span>
            </div>
            <span className="px-[0.3rem] text-white bg-[#7AB730]">56</span>
          </div>
          <div className="flex justify-between items-center py-2 cursor-pointer">
            <div>
              <span className="pr-2 text-[#7AB730]">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
              <span className="hover:underline">Email Marketing</span>
            </div>
            <span className="px-[0.3rem] text-white bg-[#7AB730]">98</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
