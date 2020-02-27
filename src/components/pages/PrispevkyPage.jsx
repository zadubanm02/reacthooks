import React from "react";
import NavigationBar from "../NavigationBar";
import PrispevkyCards from "../prispevkycards/PrispevkyCards";

const PrispevkyPage = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h3>PrispevkyPage</h3>
      </div>
      <PrispevkyCards />
    </div>
  );
};

export default PrispevkyPage;
