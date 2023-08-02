import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Profile = () => {
  return (
    <div>
      <section className="md:flex md:flex-wrap md:justify-between lg:flex lg:justify-between lg:w-full">
        <div className="bg-white px-7 py-[2.5rem] mb-8 flex w-full flex-col justify-center items-center md:max-w-full lg:w-full">
          <div className="p-4">
            <img src="/assets/user.jpg" className="w-full h-auto" />
          </div>
          <h4 className="text-xl mt-4 text-[#71AB30] text-[1.8rem] font-bold">
            John Doe
          </h4>
          <p className="text-md mt-3 text-center text-[#656565]">
            Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum
            sit no ut est ipsum erat kasd amet elitr
          </p>
        <div className="flex w-[60%] justify-between items-center text-[#7AB730] pt-4">
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
        </div>
      </section>
    </div>
  );
};

export default Profile;
