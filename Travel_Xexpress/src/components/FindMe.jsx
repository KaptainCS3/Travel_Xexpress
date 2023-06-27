import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FindMe = () => {
  return (
    <div className="md:flex md:flex-wrap md:justify-between lg:flex lg:justify-between lg:w-full">
      <form className="mb-4 flex w-full flex-col justify-center items-center md:max-w-full lg:w-full">
        <div className="w-full p-8 bg-white">
          <input
            type="email"
            className="w-3/4 outline-none border p-[0.7rem] form_focus text-[#999] md:w-[90%] sm:w-[90%]"
            name="email"
            placeholder="Your Email"
          />
          <button className="w-1/4 py-3 text-white bg-[#7AB730] md:w-[10%] sm:w-[10%]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindMe;
