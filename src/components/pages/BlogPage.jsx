import React, { useContext } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import List from "../list/List";
import { UserContext } from "../../context/UserContext";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar";

const BlogPage = () => {
  const { user, setUser } = useContext(UserContext);
  return user == null ? (
    <div>
      <NavigationBar />
      <div className="container">
        <h3 className="title">Blog</h3>
      </div>

      <List />
    </div>
  ) : (
    <div>
      <LoginNavigationBar />
      <div className="container">
        <h3 className="title">Blog</h3>
      </div>

      <List />
    </div>
  );
};

export default BlogPage;
