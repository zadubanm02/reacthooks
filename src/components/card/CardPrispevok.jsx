import React from "react";
import "./card-styles.css";
import { Link } from "react-router-dom";

export const CardPrispevok = (props) => (
  <div class="col-lg-4 col-12 ">
    <div class="blog-box border shadow p-0 m-4 ">
      <Link
        to={`/prispevky/${props.id}`}
        style={{ textDecoration: "none" }}
        className="card-link"
      >
        <img
          src={props.dbURL}
          alt="picture not loaded"
          class="img-fluid mb-2"
        />
        <div class="blog-post-content p-3">
          <small class="mt-2 text-secondary">{props.timestamp}</small>
          <h5 class="my-2">{props.state}</h5>
          <p>{props.name}</p>
        </div>
      </Link>
    </div>
  </div>
);

/*<div className="card ">
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
    </div>*/
