import React from "react";

const TagSearch = () => {
  return (
    <div>
      <div className="md:flex md:flex-wrap md:justify-between lg:mt-8 lg:flex lg:justify-between lg:w-full">
        <section className="mb-4 flex w-full flex-col justify-center items-center md:max-w-full lg:w-full">
          <h2 className="self-start tracking-[0.4rem] line-h uppercase font-bold text-[#212121] text-[1.6rem] mb-4">
            tag cloud
          </h2>
          <div className="self-start p-0 m-0">
            <button className="bg-white py-2 px-3 my-2">Design</button>
            <button className="bg-white py-2 px-3 m-2">Development</button>
            <button className="bg-white py-2 px-3 mr-2">Marketing</button>
            <button className="bg-white py-2 px-3 my-2">SEO</button>
            <button className="bg-white py-2 px-3 m-2">Writing</button>
            <button className="bg-white py-2 px-3 mr-2">Consulting</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TagSearch;
