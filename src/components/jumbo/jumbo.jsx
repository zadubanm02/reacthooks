import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./jumbo-styles.css";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron className="jumbo">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
