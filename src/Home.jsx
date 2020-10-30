import React from "react";
import { useHistory } from "react-router-dom";


const Home = (props) => {
  let history = useHistory()
    return (
    <div>
      <div>
        <h3>BECOME THE BEST</h3>
        <h1>Viva Las Trivia</h1>
        <h3>PUT YOUR TRIVIA SKILLS TO THE TEST!</h3>
      </div>
      <div>
        <button onClick={()=>{props.letsPlay(history)}}>Let's Play</button>
      </div>
    </div>
  );
};

export default Home;
