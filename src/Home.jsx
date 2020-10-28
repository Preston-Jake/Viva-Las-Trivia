import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h3>BECOME THE BEST</h3>
        <h1>Viva Las Trivia</h1>
        <h3>PUT YOUR TRIVIA SKILLS TO THE TEST!</h3>
      </div>
      <div>
        <Link to="/trivia">Let's Play</Link>
      </div>
    </div>
  );
};

export default Home;
