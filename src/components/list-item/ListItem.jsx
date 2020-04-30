import React from "react";
import { Link } from "react-router-dom";
import "./list-item.scss";

export const ListItem = props => {
  return (
    <Link
      to={`/blog/${props.id}`}
      className="list-link"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="row">
        <div className="col-lg-3 col-xs-10">
          <img
            src={props.picture}
            alt="blogpic"
            style={{ width: "250px" }}
            className="list-image"
          />
        </div>
        <div className="col-lg-9 col-xs-10">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <hr />
        </div>
      </div>
    </Link>
  );
};
