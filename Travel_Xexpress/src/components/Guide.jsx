import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Guide = () => {
  const guide = [
    {
      src: "/assets/team-1.jpg",
      uName: "Guide Name",
      passion: "Designation",
    },
    {
      src: "/assets/team-2.jpg",
      uName: "Guide Name",
      passion: "Designation",
    },
    {
      src: "/assets/team-3.jpg",
      uName: "Guide Name",
      passion: "Designation",
    },
    {
      src: "/assets/team-4.jpg",
      uName: "Guide Name",
      passion: "Designation",
    },
  ];
  return (
    <>
      <section className="m-8 py-8">
        {" "}
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-2">
            guides
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Our Travel Guides
          </h2>
          <div>
            {guide.map((item) => {
              return (
                <div
                  key={item.id}
                  className="guide cursor-pointer mb-8 flex w-full flex-col justify-center items-center hover:shadow-2xl bg-white srv transition-all duration-500 delay-0 ease-linear"
                >
                  <div className="relative overflow-hidden transition-all duration-500 delay-0 ease-linear">
                    <img src={item.src} alt="" className="h-auto max-w-full" />
                    <div className="social-icon absolute h-full flex justify-between items-center px-16 w-full top-0 left-0">
                      <div className="cursor-pointer w-9 h-9 border border-[#7AB730] text-[#7AB730] text-xl flex items-center justify-center hover:bg-[#7AB730] hover:text-white">
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                      <div className="cursor-pointer w-9 h-9 border border-[#7AB730] text-[#7AB730] text-xl flex items-center justify-center hover:bg-[#7AB730] hover:text-white">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </div>
                      <div className="cursor-pointer w-9 h-9 border border-[#7AB730] text-[#7AB730] text-xl flex items-center justify-center hover:bg-[#7AB730] hover:text-white">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                      <div className="cursor-pointer w-9 h-9 border border-[#7AB730] text-[#7AB730] text-xl flex items-center justify-center hover:bg-[#7AB730] hover:text-white">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </div>
                    </div>
                  </div>
                  <div className="my-6">
                    <h4 className="text-xl font-medium">{item.uName}</h4>
                    <p className="text-md mt-2 text-center text-[#656565]">
                      {item.passion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
