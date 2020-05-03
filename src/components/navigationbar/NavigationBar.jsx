import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

const NavigationBar = () => {
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
            Príspevky
          </Link>
          <Link to="/blog" className="nav-item nav-link navigationbar-link">
            Blog
          </Link>
          <Link to="/uzitocne" className="nav-item nav-link navigationbar-link">
            Užítočné
          </Link>
        </div>
        <div>
          <Link to="/login" className="nav-item nav-link navigationbar-link">
            Login
          </Link>
        </div>
        <div>
          <Link to="/register" className="nav-item nav-link navigationbar-link">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
