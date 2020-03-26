import React from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import List from "../list/List";

const BlogPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <h3 className="title">Blog</h3>
      </div>

      <List />
    </div>
  );
};

export default BlogPage;
