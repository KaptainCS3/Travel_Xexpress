import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <section className="sm:hidden md:hidden lg:w-[82.5%] mx-auto flex justify-between pt-[0.5rem] pb-16 relative">
        <article className="flex justify-center text-[#343a40]">
          <div className='after:content-["|"] after:px-2'>
            <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
            <span className="text-xl">stayuptodate237@gmail.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="pr-2" />
            <span className="text-xl">+237 680383177</span>
          </div>
        </article>

        <div className="flex w-[19%] justify-between items-center text-[#7AB730]">
          <div className="hover:text-[#5F8F25] cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="hover:text-[#5F8F25] cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="hover:text-[#5F8F25] cursor-pointer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div className="hover:text-[#5F8F25] cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="hover:text-[#5F8F25] cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </section>
      <section className="sm:w-full md:w-full lg:w-[82.5%] mx-auto">
        <nav
          id="nav_ms_md"
          className="flex flex-col sm:w-full sm:shadow-none sm:py-4 sm:px-8 sm:mt-0 p sm:relative md:relative md:mt-0 md:w-full py-4 px-8 md:shadow-none lg:w-[82.5%] lg:flex-row mx-auto justify-between lg:py-8 lg:px-10 absolute lg:top-0 mt-12 z-50 bg-white shadow"
        >
          <div className="sm:flex justify-between md:justify-between md:flex">
            <NavLink to="/">
              <h1 className="hero uppercase">
                Travel
                <span className="text-[#7AB730]">er</span>
              </h1>
            </NavLink>
            <div className="lg:hidden cursor-pointer" onClick={toggleNav}>
              <FontAwesomeIcon
                icon={faBars}
                className="w-10 h-10 flex justify-center items-center"
              />
            </div>
          </div>
          <div
            id="items_sm_md"
            className="flex items-start sm:hidden md:hidden lg:items-center lg:justify-between lg:mt-0 lg:flex-row lg:w-1/2"
          >
            <NavLink to="/" className="hover:text-[#7AB730]">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-[#7AB730]">
              About
            </NavLink>
            <NavLink to="/services" className="hover:text-[#7AB730]">
              Services
            </NavLink>
            <NavLink to="/package" className="hover:text-[#7AB730]">
              Tour Packages
            </NavLink>
            <div className="relative dropdown">
              <span className="span pb-8 hover:text-[#7AB730] cursor-pointer">
                Pages
                <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
              </span>
              <section className="dropdown__list">
                <div className="flex absolute right-0 top-0 z-50 w-[10rem] pt-3 pb-2 mt-[3.2rem] -mr-[5rem] rounded-b flex-col bg-white">
                  <div>
                    <div className="flex flex-col bg-white pt-[0.75em] w-full drop">
                      <NavLink
                        to="/blog"
                        className="w-full px-4 hover:bg-[#f3f3f3]"
                      >
                        Blog Grid
                      </NavLink>
                      <NavLink
                        to="/blog detail"
                        className="w-full px-4 hover:bg-[#f3f3f3]"
                      >
                        Blog Detail
                      </NavLink>
                      <NavLink
                        to="/destination"
                        className="w-full px-4 hover:bg-[#f3f3f3]"
                      >
                        Destination
                      </NavLink>
                      <NavLink
                        to="/guide"
                        className="w-full px-4 hover:bg-[#f3f3f3]"
                      >
                        Travel Guide
                      </NavLink>
                      <NavLink
                        to="/testimonial"
                        className="w-full px-4 hover:bg-[#f3f3f3]"
                      >
                        Testimonial
                      </NavLink>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          {showNav && (
            <div
              id="nav_lg"
              className="flex items-start sm:h-auto w-full px-8 flex-col justify-between mt-4 md:h-64 lg:hidden"
            >
              <NavLink to="/" className="hover:text-[#7AB730]">
                Home
              </NavLink>
              <NavLink to="/about" className="py-2 hover:text-[#7AB730]">
                About
              </NavLink>
              <NavLink to="/services" className="py-2 hover:text-[#7AB730]">
                Services
              </NavLink>
              <NavLink to="/package" className="py-2 hover:text-[#7AB730]">
                Tour Packages
              </NavLink>
              <div className="w-full py-2">
                <span
                  onClick={toggleDropdown}
                  className="dropdown hover:text-[#7AB730]"
                >
                  Pages
                  <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
                </span>
                {showDropdown && (
                  <div className="">
                    <div
                      className="flex flex-col bg-white pt-[0.75em]
                w-full"
                    >
                      <NavLink
                        to="/blog"
                        className="w-full p-2 hover:bg-[#F3F3F3]"
                      >
                        Blog Grid
                      </NavLink>
                      <NavLink
                        to="/blog detail"
                        className="w-full p-2 hover:bg-[#F3F3F3]"
                      >
                        Blog Detail
                      </NavLink>
                      <NavLink
                        to="/destination"
                        className="w-full p-2 hover:bg-[#F3F3F3]"
                      >
                        Destination
                      </NavLink>
                      <NavLink
                        to="/guide"
                        className="w-full p-2 hover:bg-[#F3F3F3]"
                      >
                        Travel Guide
                      </NavLink>
                      <NavLink
                        to="/testimonial"
                        className="w-full p-2 hover:bg-[#F3F3F3]"
                      >
                        Testimonial
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
              <NavLink to="/contact" className="pt-2 hover:text-[#7AB730]">
                Contact
              </NavLink>
            </div>
          )}
        </nav>
      </section>
    </>
  );
};

export default Nav;
