import React from "react";
import PrispevkyCards from "../prispevkycards/PrispevkyCards";
import NavigationBar from "../NavigationBar";
import Jumbo from "../jumbo/jumbo";
import List from "../list/List";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbo />
      <PrispevkyCards />
      <List />
    </div>
  );
};

export default HomePage;
