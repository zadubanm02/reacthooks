import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";
import PrispevkyPage from "../components/pages/PrispevkyPage";
import UzitocnePage from "../components/pages/UzitocnePage";

export default (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/prispevky" component={PrispevkyPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/uzitocne" component={UzitocnePage} />
  </Switch>
);
