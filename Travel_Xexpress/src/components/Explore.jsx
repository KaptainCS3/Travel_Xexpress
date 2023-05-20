import React from "react";
import explore from "../../explore";
const Explore = () => {
  return (
    <>
      <section className="m-8 py-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-2">
            DESTINATION
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Explore Top Destination
          </h2>
          <div className="cursor-pointer">
            {explore.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative mb-8 after:content-[''] after:w-[80%] after:h-[68%] after:border-[0.1rem] after:bg-black after:opacity-[30%] after:absolute after:right-0 after:left-0 after:top-[19%] after:mx-auto hover:bg-red-500"
                >
                  <img src={item.images} alt="" />
                  <div className="absolute text-center left-0 top-0 flex items-center flex-col justify-center h-full w-full text-white z-50">
                    <h4 className="text-xl font-medium">{item.tittle}</h4>
                    <p className="text-md mt-3">{item.content}</p>
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
