import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";
import PrispevkyPage from "../components/pages/PrispevkyPage";
import UzitocnePage from "../components/pages/UzitocnePage";
import DetailPage from "../components/pages/DetailPage";
import NewPage from "../components/pages/NewPage";
import BlogDetailPage from "../components/pages/BlogDetailPage";

export default (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route exact path="/prispevky" component={PrispevkyPage} />
    <Route exact path="/blog" component={BlogPage} />
    <Route path="/uzitocne" component={UzitocnePage} />
    <Route path="/novy" component={NewPage} />
    <Route exact path="/prispevky/:id" component={DetailPage} />
    <Route exact path="/blog/:id" component={BlogDetailPage} />
  </Switch>
);
