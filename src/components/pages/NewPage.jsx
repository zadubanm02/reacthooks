import React, { useContext } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import "./newpage.scss";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { AddPrispevok } from "../addprispevok/AddPrispevok";

const NewPage = () => {
  const { user, setUser } = useContext(UserContext);
  return user == null ? (
    <div>
      <NavigationBar />
      <div className="container">
        <h3 className="text-center my-5 font-weight-bold">
          Ked chces pridat novy prispevok musis byt prihlaseny !
        </h3>
        <div className="row">
          <div className="col-lg-6 col-12 text-center my-3">
            <h6>Mas uz vytvoreny ucet ? </h6>
            <Link to="/login" className="text-center">
              Prihlasenie
            </Link>
          </div>
          <div className="col-lg-6 col-12 text-center my-3">
            <h6>Vytvor si u nas ucet rychlo a jednoducho</h6>
            <Link to="/register" className="text-center">
              Zaregistruj sa
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <React.Fragment>
      <LoginNavigationBar />
      <div className="container">
        <h3 className="font-weight-bold text-center m-4">
          {" "}
          Pridaj novy prispevok
        </h3>
        <AddPrispevok />
      </div>
    </React.Fragment>
  );
};

export default NewPage;
