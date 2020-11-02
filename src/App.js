import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Trivia from "./components/Trivia";
import Score from "./components/Score";


const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trivia">
            <Trivia />
          </Route>
          <Route path="/scoreboard">
            <Score />
          </Route>
        </Switch>
      </Router>
  );
};

export default App;
