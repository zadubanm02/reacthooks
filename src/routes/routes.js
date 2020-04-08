import React, { useState, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import BlogPage from "../components/pages/BlogPage";
import PrispevkyPage from "../components/pages/PrispevkyPage";
import UzitocnePage from "../components/pages/UzitocnePage";
import DetailPage from "../components/pages/DetailPage";
import NewPage from "../components/pages/NewPage";
import BlogDetailPage from "../components/pages/BlogDetailPage";
import { UserContext } from "../context/UserContext.js";
import ProfilePage from "../components/pages/ProfilePage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";

export function AppRouter() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerUser}>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact path="/prispevky" component={PrispevkyPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/uzitocne" component={UzitocnePage} />
        <Route path="/novy" component={NewPage} />
        <Route exact path="/prispevky/:id" component={DetailPage} />
        <Route exact path="/blog/:id" component={BlogDetailPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </UserContext.Provider>
  );
}
