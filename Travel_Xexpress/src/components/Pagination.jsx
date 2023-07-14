import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="md:flex md:flex-wrap md:justify-between lg:flex lg:justify-between lg:w-[95%]">
        <section className="mb-4 flex w-full flex-col justify-center items-center md:max-w-full lg:w-full">
          <div className="w-full p-7 bg-white flex justify-center items-center">
            <div className="flex justify-evenly">
              <button className="text-[#71AB30] hover:bg-gray-200 border-[0.5px] w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </button>
              <button className="text-white bg-[#71AB30] hover:bg-gray-200  w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                1
              </button>
              <button className="text-[#71AB30] hover:bg-gray-200 border-[0.5px] w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                2
              </button>
              <button className="text-[#71AB30] hover:bg-gray-200 border-t-[0.5px] border-b-[0.5px] w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                3
              </button>
              <button className="text-[#71AB30] hover:bg-gray-200 border-[0.5px] w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pagination;
