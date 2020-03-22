import React from "react";
import NavigationBar from "../NavigationBar";
import TestComp2 from "../add-new/addNew";

const NewPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div>
        <TestComp2 />
      </div>
    </React.Fragment>
  );
};

export default NewPage;
