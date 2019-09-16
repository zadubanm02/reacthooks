import React from "react";
import PrispevkyCards from "../prispevkycards/PrispevkyCards";
import NavigationBar from "../NavigationBar";
import Jumbo from "../jumbo/jumbo";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbo />
      <PrispevkyCards />
    </div>
  );
};

export default HomePage;
