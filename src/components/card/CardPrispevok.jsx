import React from "react";
import "./card-styles.css";
import { Link } from "react-router-dom";

export const CardPrispevok = props => (
  <Link
    to={`/prispevky/${props.id}`}
    style={{ textDecoration: "none" }}
    className="card-link-wrapper"
  >
    <div className="card ">
      <div>
        <img className="card-img" src={props.dbURL} alt="picturenotloaded" />

        <div className="card-textarea">
          <div className="card-title">
            <h4>{props.state}</h4>
          </div>
          <div className="card-text">
            <h6>{props.name}</h6>
          </div>
          <div className="card-text">{props.description}</div>
          <br />
          <div className="card-text">
            <small>{props.timestamp}</small>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
