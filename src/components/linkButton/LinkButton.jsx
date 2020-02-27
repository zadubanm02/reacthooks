import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import db from "../../firebase/firebase";

const LinkButton = props => {
  return (
    <div>
      <Link to={props.docID}>
        <Button variant="secondary">Secondary</Button>
      </Link>
    </div>
  );
};

export default LinkButton;
