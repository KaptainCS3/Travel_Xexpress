import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = ({header}) => {
  return (
    <section className="bg-image-header w-full mx-auto px-8 relative">
      <div className="flex justify-center items-center min-h-[400px] text-white flex-col">
        <h3 className="header uppercase">{header}</h3>
        <section className="mt-8">
            <span className="uppercase mr-2">Home</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
            <span className="uppercase ml-2">{header}</span>
        </section>
      </div>
    </section>
  );
};

export default Header;
