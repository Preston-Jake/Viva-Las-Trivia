import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Trivia from "./Trivia";
import Score from "./Score";
import data from "./data/Apprentice_TandemFor400_Data.json";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const createRandomQuestionArray = (data) => {
  let round = []
  for (let i = 0; i < 10; i++) {
    let randomInt = getRandomInt(0, data.length)
    round.push(data[randomInt])
  }
  console.log(round)
  return round
};

const App = () => {
  createRandomQuestionArray(data)
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
