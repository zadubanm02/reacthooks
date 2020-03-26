import React from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import TestComp2 from "../add-new/addNew";
import "./newpage.scss";

const NewPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="container">
        <h3 className="addnew-title">Pridaj novy prispevok</h3>
        <TestComp2 />
      </div>
    </React.Fragment>
  );
};

export default NewPage;
