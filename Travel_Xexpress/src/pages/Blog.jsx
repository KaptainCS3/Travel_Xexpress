import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookTravel from "../components/BookTravel";
import BlogContent from "../components/BlogContent";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
const Blog = ({ header }) => {
  return (
    <div className="bg-[#F3F3F3] font">
      <Nav />
      <Header header={header} />
      <BookTravel />
      <BlogContent />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Blog;
