import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Trivia from './Trivia';
import Score from './Score';

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
}

export default App;
