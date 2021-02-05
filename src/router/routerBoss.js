import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "../molecules/game";
import LandingPage from "../molecules/landingPage";

const RouterBoss = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/game" exact component={Game} />
      </Switch>
    </Router>
  );
};

export default RouterBoss;
