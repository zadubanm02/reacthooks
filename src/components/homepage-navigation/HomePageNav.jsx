import React from "react";
import { Link } from "react-router-dom";
import "./homepagenav.scss";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg navigationbar">
      <Link to="/" className="navbar-brand">
        Explr.
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/prispevky" className="nav-item nav-link">
            Prispevky
          </Link>
          <Link to="/blog" className="nav-item nav-link">
            Blog
          </Link>
          <Link to="uzitocne" className="nav-item nav-link">
            Uzitocne
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
