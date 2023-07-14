import React from "react";
import GuideList from "./GuideList";
const Guide = () => {
  return (
      <section className="m-8 py-8 lg:w-[82.5%] mx-auto">
        {" "}
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-4">
            guides
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Our Travel Guides
          </h2>
          <GuideList />
        </div>
      </section>
  );
};

export default Guide;
