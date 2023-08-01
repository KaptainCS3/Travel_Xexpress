import React from "react";
import client from "../../client";
const Testimonial = () => {
  return (
    <>
      <section className="m-8 py-12 lg:w-[82.5%] mx-auto md:mx-12">
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-4">
            testimonial
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            What Say Our Clients
          </h2>
          <div className="sm:mx-8 md:mx-8">
            <div className="mt-16 cursor-grab lg:flex justify-center items-center">
              {client.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="mx-2 mb-24 relative flex w-full flex-col justify-center items-center hover:shadow-2xl bg-white srv transition-all duration-500 delay-0 ease-linear"
                  >
                    <div className="transition-all duration-500 delay-0 ease-linear absolute top-0 -mt-12">
                      <img src={item.src} alt="" className="" />
                    </div>
                    <div className="mt-16 px-6 mb-6">
                      <p className="text-[#656565] mb-4 text-center">
                        {item.description}
                      </p>
                      <div className="text-center">
                        <h4 className="mt-4 mb-2 font-medium text-xl text-[#212121]">
                          {item.title}
                        </h4>
                        <h5 className="text-[#656565]">{item.profession}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
