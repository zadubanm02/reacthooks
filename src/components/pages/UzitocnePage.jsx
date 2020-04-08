import React, { useContext } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import LoginNavigationBar from "../login-navigationbar/LoginNavigationBar";
import { UserContext } from "../../context/UserContext";

const UzitocnePage = () => {
  const { user, setUser } = useContext(UserContext);

  return user == null ? (
    <div>
      <NavigationBar />
      <div className="container">
        <h2 className="text-center">UzitocnePage</h2>
      </div>
    </div>
  ) : (
    <div>
      <LoginNavigationBar />
      <div className="container">
        <h2 className="text-center">UzitocnePage</h2>
      </div>
    </div>
  );
};

export default UzitocnePage;
