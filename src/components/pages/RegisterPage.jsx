import React from "react";
import SignUpComponent from "../signup/SignUp";
import NavigationBar from "../navigationbar/NavigationBar";

const RegisterPage = props => {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <SignUpComponent />
      </div>
    </div>
  );
};

export default RegisterPage;
