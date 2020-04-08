import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { firebaseClass } from "../../firebase/firebase";
import { UserContext } from "../../context/UserContext";

const LoginComponent = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const login = async event => {
    event.preventDefault();
    try {
      await firebaseClass.logIn(email, password).then(res => {
        console.log(res.user.displayName);
        setUser(res.user);
      });
      props.history.replace("/prispevky");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-center">Prihlas sa</h2>
      <form className="add-new-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            className="form-control addnew-text-input"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            className="form-control addnew-text-input"
            placeholder="Password"
          />

          <br />
          <button type="button" className=" submit-button" onClick={login}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginComponent);
