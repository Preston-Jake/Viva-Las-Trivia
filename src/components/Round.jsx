import React, { useContext } from "react";
// import styled from "styled-components";
import { AppContext } from "../AppContext";

// const OuterCircle = styled.div``

// const InnerCircle = styled.div``

// const Question = styled.h2``

const Round = () => {
  const { state } = useContext(AppContext);
  const {questionIndex} = state;
  return (
    <div>
      <div>
        <h2>{questionIndex + 1}</h2>
      </div>
    </div>
  );
};

export default Round;
