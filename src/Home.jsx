import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h3></h3>
        <h1>Viva Las Trivia</h1>
        <h3></h3>
      </div>
      <div>
        <Link to="/trivia">Let's Play</Link>
      </div>
    </div>
  );
};

export default Home;
