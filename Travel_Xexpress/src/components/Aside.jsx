import React from "react";
import Profile from "./Profile";
import FindMe from "./FindMe";
import Category from "./Category";
import RecentPost from "./RecentPost";
import TagSearch from "./TagSearch";
const Aside = () => {
  return (
      <div className="lg:w-[30%] lg:m-0 md:w-full md:px-8 sm:w-full sm:px-8 lg:mt-4">
        <Profile />
        <FindMe />
        <Category />
        <RecentPost />
        <TagSearch />
      </div>
  );
};

export default Aside;
