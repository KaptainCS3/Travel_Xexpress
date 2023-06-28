import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import BlogDetail from "../components/BlogDetail";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";

const BlogDetails = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <div>
        <BlogDetail />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default BlogDetails;
