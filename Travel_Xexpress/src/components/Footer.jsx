import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212121]">
        <div className="mx-4 lg:flex lg:justify-between lg:px-8">
          <div className="md:flex md:justify-between lg:w-[48%] lg:flex lg:justify-between ">
            {/* div 1 */}
            <div className="md:w-[48%] md:pt-16 lg:w-[48%] lg:pt-24">
              <div>
                <h1 className="hero uppercase text-white pb-4 sm:pt-24">
                  travel<span className="hero text-[#7AB739]">er</span>
                </h1>
                <p className="text-[#ffffff50]">
                  Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet
                  labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-white tracking-[0.4rem] uppercase py-4 font-medium">
                  follow us
                </h3>
                <div className="flex">
                  <span className="border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col mr-2 text-[#7AB730] text-[1.2rem] hover:bg-[#7AB730] hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                  <span className="border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col mr-2 text-[#7AB730] text-[1.2rem] hover:bg-[#7AB730] hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                  <span className="border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col mr-2 text-[#7AB730] text-[1.2rem] hover:bg-[#7AB730] hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                  <span className="border border-[#7AB730] w-9 h-9 flex justify-center items-center flex-col text-[#7AB730] text-[1.2rem] hover:bg-[#7AB730] hover:text-white cursor-pointer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-6 md:w-[48%] md:pt-12 lg:w-[48%] lg:pt-12">
              <h3 className="text-white tracking-[0.4rem] uppercase py-4 font-medium text-xl">
                our services
              </h3>
              <div className="text-[#ffffff50]">
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">About</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">
                    Destination
                  </span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Services</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Packages</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Guides</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">
                    Testimonial
                  </span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Blog</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between md:pt-8 lg:w-[48%] lg:flex lg:justify-between lg:pt-12">
            <div className="mb-6 md:w-[48%] lg:w-[48%]">
              <h3 className="text-white tracking-[0.4rem] uppercase py-4 font-medium text-xl">
                usefull links
              </h3>
              <div className="text-[#ffffff50]">
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">About</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">
                    Destination
                  </span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Services</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Packages</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Guides</span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">
                    Testimonial
                  </span>{" "}
                </p>
                <p className="cursor-pointer lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faAngleRight} className="" />{" "}
                  <span className="ml-[.25rem] hover:underline">Blog</span>{" "}
                </p>
              </div>
            </div>
            <div className="pb-6 md:w-[48%] lg:w-[48%]">
              <h3 className="text-white tracking-[0.4rem] uppercase py-4 font-medium text-xl">
                contact us
              </h3>
              <div className="text-[#ffffff50]">
                <p className="lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="" />{" "}
                  <span className="ml-[.25rem]">123 Street, New York, USA</span>{" "}
                </p>
                <p className="lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faPhone} className="" />{" "}
                  <span className="ml-[.25rem]">+012 345 67890</span>{" "}
                </p>
                <p className="lg:py-[0.2rem]">
                  <FontAwesomeIcon icon={faEnvelope} className="" />{" "}
                  <span className="ml-[.25rem]">info@example.com</span>{" "}
                </p>
              </div>
              <div className="mb-16 pb-12 lg:w-full">
                <h3 className="text-white tracking-[0.4rem] uppercase py-4 font-medium">
                  Newsletter
                </h3>
                <form>
                  <div className="w-full">
                    <input
                      type="email"
                      className="w-3/4 bg-white outline-none p-3 form text-[#999]"
                      name="email"
                      placeholder="Your Email"
                      // value={contactUs.email}
                      // onChange={handleChange}
                    />
                    <button className="w-1/4 py-3 text-white bg-[#7AB730]">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col pt-4 pb-8 border_ lg:flex-row lg:justify-between lg:px-12">
          <p className="text-[#ffffff50] py-3 md:self-start md:px-10">
            Copyright © <span className="text-[#7AB730]">Domain.</span> All
            Rights Reserved.
          </p>
          <p className="text-[#ffffff50] md:self-end md:px-10">
            Designed by <span className="text-[#7AB730]">HTML Codex</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
