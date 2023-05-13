import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <section className="sm:hidden md:hidden lg:w-[82.5%] mx-auto flex justify-between pt-[0.5rem] pb-16 relative">
        <article className="flex justify-center text-[#343a40]">
          <div className='after:content-["|"] after:px-2'>
            <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
            <span className="text-xl">info@example.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="pr-2" />
            <span className="text-xl">+012 345 6789</span>
          </div>
        </article>

        <div className="flex w-[19%] justify-between items-center text-[#7AB730]">
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </section>
      <section className="sm:w-full md:w-full lg:w-[82.5%] mx-auto">
        <nav className="flex flex-col sm:w-full sm:shadow-none sm:py-4 sm:px-8 sm:mt-0 p sm:relative md:relative md:mt-0 md:w-full py-4 px-8 md:shadow-none lg:w-[82.5%] lg:flex-row mx-auto justify-between lg:py-4 lg:px-10 absolute -mt-12 z-50 bg-white shadow">
          <div className="sm:flex justify-between md:justify-between md:flex">
            <h1 className="hero">
              Travel
              <span className="text-[#7AB730]">er</span>
            </h1>
            <div className="lg:hidden" onClick={toggleNav}>
              <FontAwesomeIcon
                icon={faBars}
                className="w-10 h-10 flex justify-center items-center"
              />
            </div>
          </div>
          <div className="flex items-start sm:hidden md:hidden lg:items-center lg:justify-between lg:mt-0 lg:flex-row lg:w-1/2">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Tour Packages</p>
            <div>
              <p>Pages</p>
              <div>
                <p>Blog Grid</p>
                <p>Blog Detail</p>
                <p>Destination</p>
                <p>Travel Guide</p>
                <p>Testimonial</p>
              </div>
            </div>
            <p>Contact</p>
          </div>
          {showNav && (
            <div className="flex items-start sm:h-64 w-full px-8 flex-col justify-between mt-4 md:h-64 lg:hidden">
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Tour Packages</p>
              <div>
                <p>Pages</p>
                <div className="px-2 mt-5 mb-2">
                  <p className="py-[0.35rem]">Blog Grid</p>
                  <p className="py-[0.35rem]">Blog Detail</p>
                  <p className="py-[0.35rem]">Destination</p>
                  <p className="py-[0.35rem]">Travel Guide</p>
                  <p className="py-[0.35rem]">Testimonial</p>
                </div>
              </div>
              <p>Contact</p>
            </div>
          )}
        </nav>
      </section>
    </>
  );
};

export default Nav;
