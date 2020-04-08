import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import NavigationBar from "../navigationbar/NavigationBar";

const ProfilePage = props => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <NavigationBar />
      <div className="container text-center">
        <h2>Tvoj Profil</h2>
        <div>
          <h4>{user.displayName}</h4>
          <h6>{user.email}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
