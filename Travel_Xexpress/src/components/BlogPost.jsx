import React from "react";
import BlogCard from "./BlogCard";
const BlogPost = () => {
  return (
    <>
      <section className="m-8 py-8 lg:w-[82.5%] mx-auto md:mx-12 sm:mx-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[0.4rem] line-h font-medium uppercase text-[#7AB730] mb-4">
            our blog
          </h3>
          <h2 className="font-bold text-[#212121] hero text-center mx-2 mb-8">
            Latest From Our Blog
          </h2>
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default BlogPost;
