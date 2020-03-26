import React from "react";
import { Link } from "react-router-dom";
import "./homepagenav.scss";

const HomePageNav = () => {
  return (
    <nav
      className="navbar navbar-light navbar-expand-sm homenavigation"
      id="homepagenav"
    >
      <Link to="/" className="navbar-brand navigation-brand" id="homepagebrand">
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
          <Link
            to="/"
            className="nav-item nav-link homepagenav"
            id="homepagenavlink"
          >
            Home
          </Link>
          <Link
            to="/prispevky"
            className="nav-item nav-link homepagenav"
            id="homepagenavlink"
          >
            Prispevky
          </Link>
          <Link
            to="/blog"
            className="nav-item nav-link homepagenav"
            id="homepagenavlink"
          >
            Blog
          </Link>
          <Link
            to="uzitocne"
            className="nav-item nav-link homepagenav"
            id="homepagenavlink"
          >
            Uzitocne
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomePageNav;
