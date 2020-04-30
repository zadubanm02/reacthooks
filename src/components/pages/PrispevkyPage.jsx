import React, { useContext } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar.jsx";
import PrispevkyCards from "../prispevkycards/PrispevkyCards";
import { Link } from "react-router-dom";
import "./prispevkypage.scss";
import { UserContext } from "../../context/UserContext";

const PrispevkyPage = () => {
  const { user, setUser } = useContext(UserContext);
  return user == null ? (
    <React.Fragment>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12"></div>
          <div className="col-lg-6 col-12">
            {" "}
            <h3 className="title text-center py-4 m-4 font-weight-bold">
              Prispevky
            </h3>
          </div>
          <div className="col-lg-3 col-12 my-5 px-3">
            <Link to="/novy" className="btn btn-primary plus text-center my-6">
              Pridaj novy prispevok <i class="fas fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
      <PrispevkyCards />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <LoginNavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 col-12">
            {" "}
            <h3 className="title text-center py-4 my-4">Prispevky</h3>
          </div>
          <div className="col-lg-3 col-12">
            <Link to="/novy" className="btn btn-primary plus">
              Pridaj novy prispevok <i class="fas fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
      <PrispevkyCards />
    </React.Fragment>
  );
};

export default PrispevkyPage;
