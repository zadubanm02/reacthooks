import React from "react";

const DetailItem = props => {
  return (
    <div>
      DetailPage
      <h2>{props.name}</h2>
      <h4>{props.state}</h4>
      <p>{props.content}</p>
      <img src={props.dbURL} alt="picturenotloaded" />
    </div>
  );
};

export default DetailItem;
