import React from "react";
import explore from "../../explore";
const Explore = () => {
  // mb-8 after:content-[''] after:w-[80%] after:h-[68%] after:border-[0.1rem] after:bg-black after:opacity-[30%] after:absolute after:right-0 after:left-0 after:top-[16%] after:mx-auto
  return (
    <>
      <section className="m-8 py-8 lg:w-[82.5%] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-4">
            DESTINATION
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Explore Top Destination
          </h2>
          <div className="cursor-pointer sm:mx-8 md:mx-12 md:flex flex-wrap justify-between lg:flex lg:flex-wrap lg:justify-between">
            {explore.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative w-full mb-10 md:w-[48%] lg:w-[31%]"
                >
                  <div className="destination relative overflow-hidden">
                    <img
                      src={item.images}
                      alt=""
                      className="max-w-full h-auto"
                    />
                    <div className="destination-overlay absolute text-center flex items-center flex-col justify-center h-auto overflow-hidden w-full text-white z-50">
                      <h4 className="text-xl font-medium">{item.tittle}</h4>
                      <p className="text-md mt-3">{item.content}</p>
                    </div>
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

export default Explore;
