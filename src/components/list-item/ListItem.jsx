import React from "react";
import { ListGroup } from "react-bootstrap";

export const ListItem = props => {
  return (
    <div>
      <ListGroup.Item>
        {props.header}
        {props.name}
      </ListGroup.Item>
    </div>
  );
};
