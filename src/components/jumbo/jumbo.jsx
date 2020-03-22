import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
import "./jumbo-styles.css";
import "./pic-styles.css";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron className="jumbo">
        <Row>
          <h1>Hello, Slavka!</h1>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
