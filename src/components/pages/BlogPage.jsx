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
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            {" "}
            <h3 className="title text-center m-4 p-3">Blog</h3>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

      <List />
    </div>
  ) : (
    <div>
      <LoginNavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            {" "}
            <h3 className="title text-center">Blog</h3>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

      <List />
    </div>
  );
};

export default BlogPage;
