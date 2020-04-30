import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { firebaseClass } from "../../firebase/firebase";
import "./signup.scss";

const SignUpComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    try {
      await firebaseClass.signUp(name, email, password);
      props.history.replace("/prispevky");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-center font-weight-bold m-3">Zaregistruj sa</h2>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <form className="add-new-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control addnew-text-input"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control addnew-text-input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                values={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control addnew-text-input"
                placeholder="Password"
              />

              <br />
              <button
                className="btn btn-primary login-button"
                style={{ background: "#FBD34D" }}
                onClick={signup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default withRouter(SignUpComponent);

/* try {
      await firebaseClass.signUp(name, email, password);
      props.history.replace("/prispevky");
    } catch (err) {
      alert(err.message);
    }*/
