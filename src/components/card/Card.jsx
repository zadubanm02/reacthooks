import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card-styles.css";

export const CardPrispevok = props => (
  <div>
    <Card className="cardstyle">
      <Card.Body>
        <Card.Title>{props.state}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Button className="button">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);
