import React from "react";
import { Card } from "react-bootstrap";
import "./card-styles.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const CardPrispevok = props => (
  <div>
    <Card className="cardstyle">
      <Card.Body>
        <Card.Title>{props.state}</Card.Title>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <img className="cardPic" src={props.dbURL} alt="picturenotloaded" />
        <Link to={`/${props.id}`}>
          <Button variant="secondary">Go to article</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);
