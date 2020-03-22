import React from "react";
import "./card-styles.css";
import { Link } from "react-router-dom";

export const CardPrispevok = props => (
  <div className="card ">
    <div className="card-body">
      <div className="card-title">{props.state}</div>
      <div className="card-text">{props.name}</div>
      <div className="card-text">{props.description}</div>
      <img className="card-img-top" src={props.dbURL} alt="picturenotloaded" />
      <br />
      <Link className="btn btn-primary" to={`/prispevky/${props.id}`}>
        Go to article
      </Link>
    </div>
  </div>
);
