import React from "react";

const RecentPost = () => {
  return (
    <div className="md:flex md:flex-wrap md:justify-between lg:mt-8 lg:flex lg:justify-between lg:w-full">
      <section className="mb-4 flex w-full flex-col justify-center items-center md:max-w-full lg:w-full">
        <h2 className="self-start tracking-[0.4rem] line-h uppercase font-bold text-[#212121] text-[1.6rem] mb-6">
          RECENT POST
        </h2>
        <div className="w-full h-[120px] bg-white flex justify-between my-2">
          <div className="h-full">
            <img
              src="/assets/blog-100x100.jpg"
              className="h-full object-cover"
            />
          </div>
          <div className="m-3 w-3/4">
            <h3 className="text-sm font-medium mb-2 w-full">
              Diam lorem dolore justo eirmod lorem dolore
            </h3>
            <p className="hover:text-[#656565] text-[#5F8F25] text-sm font-normal font line_h">
              Jan 01, 2050
            </p>
          </div>
        </div>
        <div className="w-full h-[120px] bg-white flex justify-between my-2">
          <div className="h-full">
            <img
              src="/assets/blog-100x100.jpg"
              className="h-full object-cover"
            />
          </div>
          <div className="m-3 w-3/4">
            <h3 className="text-sm font-medium mb-2 w-full">
              Diam lorem dolore justo eirmod lorem dolore
            </h3>
            <p className="hover:text-[#656565] text-[#5F8F25] text-sm font-normal font line_h">
              Jan 01, 2050
            </p>
          </div>
        </div>
        <div className="w-full h-[120px] bg-white flex justify-between my-2">
          <div className="h-full">
            <img
              src="/assets/blog-100x100.jpg"
              className="h-full object-cover"
            />
          </div>
          <div className="m-3 w-3/4">
            <h3 className="text-sm font-medium mb-2 w-full">
              Diam lorem dolore justo eirmod lorem dolore
            </h3>
            <p className="hover:text-[#656565] text-[#5F8F25] text-sm font-normal font line_h">
              Jan 01, 2050
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPost;
