import React from "react";

const About = () => {
  return (
    <>
      <section className="m-8 py-8 bg-white px-6 lg:absolute lg:right-0 lg:mt-[13rem] lg:h-auto lg:w-[56%] lg:flex lg:items-center lg:justify-center">
        <div>
          <h3 className="text-[#7AB730] uppercase pb-3">About Us</h3>
          <h2 className="hero">We Provide Best Tour Packages In Your Budget</h2>
          <p className="text-[#656565] text-left pt-6">
            Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
            sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
            sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
          </p>
          <div className="flex my-6">
            <div className="pr-4">
              <img src="/assets/about-1.jpg" alt="" />
            </div>
            <div className="pl-4">
              <img src="/assets/about-2.jpg" alt="" />
            </div>
          </div>
          <button className="bg-[#7AB730] px-4 py-3 text-white">
            Book Now
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
