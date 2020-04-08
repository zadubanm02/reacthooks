import React, { useContext } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import TestComp2 from "../add-new/addNew";
import "./newpage.scss";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const NewPage = () => {
  const { user, setUser } = useContext(UserContext);
  return user == null ? (
    <div>
      <NavigationBar />
      <div className="container">
        <h3 className="text-center my-5">
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
        <h3 className="addnew-title">Pridaj novy prispevok</h3>
        <TestComp2 />
      </div>
    </React.Fragment>
  );
};

export default NewPage;
