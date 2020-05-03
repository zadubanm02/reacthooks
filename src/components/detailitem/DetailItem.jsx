import React from "react";
import "./detail-item.scss";

const DetailItem = (props) => {
  return (
    <div className="container ">
      <div className="row m-5">
        <div className="col-lg-6 text-center">
          <h2>{props.state}</h2>
          <h4>{props.name}</h4>
          <p>{props.content}</p>
        </div>
        <div className="col-lg-6">
          <img
            src={props.dbURL}
            alt="picturenotloaded"
            className="col-lg-12 col-xs-12  img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
