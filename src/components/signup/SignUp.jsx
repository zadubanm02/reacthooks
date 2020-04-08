import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { firebaseClass } from "../../firebase/firebase";

const SignUpComponent = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signup = async event => {
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
      <h2 className="text-center">Zaregistruj sa</h2>
      <form className="add-new-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            className="form-control addnew-text-input"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            className="form-control addnew-text-input"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            values={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            className="form-control addnew-text-input"
            placeholder="Password"
          />

          <br />
          <button type="button" className=" submit-button" onClick={signup}>
            Sign Up
          </button>
        </div>
      </form>
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
