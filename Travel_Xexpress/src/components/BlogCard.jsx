import React from "react";
import blog from "../../blog";
const BlogCard = () => {
  return (
    <>
      <div className="cursor-pointer sm:max-w-[500px] md:flex md:flex-wrap md:justify-between lg:flex lg:flex-wrap lg:justify-between lg:mt-4">
        {blog.map((item) => {
          return (
            <div
              key={item.id}
              className="mb-8 flex w-full flex-col justify-center items-center hover:shadow-2xl bg-white srv transition-all duration-500 delay-0 ease-linear relative md:w-[48%] lg:w-[31%]"
            >
              <div className="px-4 py-[0.25rem] absolute left-0 top-0 mt-8 -ml-4 bg-[#7AB730] flex flex-col items-center justify-around after:absolute after:top-0 after:left-0 after:-mt-4 after:border-t-transparent after:border-l-transparent after:border-b-[#5f8f25] after:border-r-[#5f8f25] after:border-8">
                <h6 className="text-[0.9rem] font-bold">01</h6>
                <small className="uppercase text-sm text-white -mt-[0.25rem]">
                  jan
                </small>
              </div>
              <div className="transition-all duration-500 delay-0 ease-linear">
                <img src={item.src} alt="" className="h-full" />
              </div>
              <div className="my-5 px-5">
                <h3 className="text-[#7AB730]">
                  <span className="hover:text-[#5F8F25]">{item.title}</span>{" "}
                  <span>|</span>{" "}
                  <span className="hover:text-[#5F8F25]">{item.title_}</span>
                </h3>
                <h2 className="text-[#212121] text-xl font-medium mb-4 hover:text-[#5F8F25]">
                  {item.description}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
