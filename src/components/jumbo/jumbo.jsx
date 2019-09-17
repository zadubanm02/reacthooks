import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./jumbo-styles.css";
import pic from "../../earthpic.png";
import "./pic-styles.css";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron className="jumbo">
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit</p>
        <img src={pic} alt="earth" className="pic" />
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
