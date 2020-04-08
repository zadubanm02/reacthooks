import React from "react";
import { Link } from "react-router-dom";
import "./login-navigationbar.scss";
import LogOutButton from "../logout-button/LogOutButton";

const LoginNavigationBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-sm ">
      <Link to="/" className="navbar-brand navigation-brand">
        Explr.
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <div className="navbar-nav mr-auto">
          <Link to="/" className="nav-item nav-link navigationbar-link">
            Home
          </Link>
          <Link
            to="/prispevky"
            className="nav-item nav-link navigationbar-link"
          >
            Prispevky
          </Link>
          <Link to="/blog" className="nav-item nav-link navigationbar-link">
            Blog
          </Link>
          <Link to="uzitocne" className="nav-item nav-link navigationbar-link">
            Uzitocne
          </Link>
        </div>
        <div>
          <Link to="/profile" className="nav-item nav-link navigationbar-link">
            Profile
          </Link>
        </div>
        <div>
          <LogOutButton />
        </div>
      </div>
    </nav>
  );
};

export default LoginNavigationBar;
