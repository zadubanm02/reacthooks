import React from "react";
import "./detail-item.scss";

const DetailItem = props => {
  return (
    <div className="container">
      <h2>{props.state}</h2>
      <h4>{props.name}</h4>
      <p>{props.content}</p>
      <img
        src={props.dbURL}
        alt="picturenotloaded"
        className="col-lg-12 col-xs-12"
      />
    </div>
  );
};

export default DetailItem;
