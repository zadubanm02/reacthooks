import React from "react";
import Jumbo from "../jumbo/jumbo";
import List from "../list/List";
import HomePageCards from "../home-page-cards/homePageCards";
import HomePageNav from "../homepage-navigation/HomePageNav";

const HomePage = () => {
  return (
    <div>
      <HomePageNav />
      <Jumbo />
      <HomePageCards />
      <List />
    </div>
  );
};

export default HomePage;
