import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./jumbo-styles.css";
import pic from "../../earthpic.png";
import "./pic-styles.css";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron className="jumbo">
        <Row>
          <Col>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit</p>
          </Col>
          <Col>
            <img src={pic} alt="earth" className="pic" />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
