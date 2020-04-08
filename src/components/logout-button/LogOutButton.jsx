import React, { useContext } from "react";
import { firebaseClass } from "../../firebase/firebase";
import { UserContext } from "../../context/UserContext";

const LogOutButton = props => {
  const { user, setUser } = useContext(UserContext);
  const logout = async event => {
    event.preventDefault();
    try {
      await firebaseClass.logOut();
      setUser(null);
      alert("You have been logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button className="btn btn-default" onClick={logout}>
        Log Out <i class="fas fa-power-off"></i>
      </button>
    </div>
  );
};

export default LogOutButton;
