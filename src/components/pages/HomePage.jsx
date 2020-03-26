import React from "react";
import List from "../list/List";
import HomePageCards from "../home-page-cards/homePageCards";
import HomePageNav from "../homepage-navigation/HomePageNav";
import "./homepage.scss";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <HomePageNav />
        <div className="container">
          <div className="header-content">
            <div className="row">
              <div className="col-lg-6 col-xs-12 ">
                <div style={{ marginTop: "230px" }}>
                  <h1>Explr.</h1>
                  <p>
                    Zabudni na prikraslene fotky od cestoviek a podobnych
                    sraciek. Chekni nase prispevky a vyber si sam.
                  </p>
                  <Link
                    to={"/prispevky"}
                    className="btn btn-primary link-button"
                  >
                    Prispevky <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12 "></div>
            </div>
          </div>
        </div>
      </header>
      <br />
      <div className="container">
        <h2 className="homepage-h2">Chekni nove prispevky</h2>
      </div>
      <HomePageCards />
      <div className="container">
        <h2 className="homepage-h2">Nieco z nasich odporucani</h2>
      </div>
      <List />
      <Footer />
    </div>
  );
};

export default HomePage;
