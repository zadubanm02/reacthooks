import React from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import PrispevkyCards from "../prispevkycards/PrispevkyCards";
import { Link } from "react-router-dom";
import "./prispevkypage.scss";

const PrispevkyPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="container">
        <h3 className="title">Prispevky</h3>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 ">
            <div className="row add-prispevok">
              <Link to="/novy" className="btn btn-primary plus">
                Pridaj novy prispevok <i class="fas fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PrispevkyCards />
    </React.Fragment>
  );
};

export default PrispevkyPage;
