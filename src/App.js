import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Trivia from "./components/Trivia";
import Score from "./components/Score";
import AppProvider from "./AppContext";

const App = () => {
  console.log("RENDER APP")
  return (
    <AppProvider>
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
    </AppProvider>
  );
};

export default App;
