import React, { useState, useEffect, useContext } from "react";
import LoginComponent from "../login/LoginComponent";
import NavigationBar from "../navigationbar/NavigationBar";

const LoginPage = props => {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
