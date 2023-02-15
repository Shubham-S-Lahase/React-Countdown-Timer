import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [startingPoint, setStartingPoint] = useState("");
  const inputValue = startingPoint;
  const getValue = (event) => {
    let numericval = Number(event.target.value);
    // console.log(typeof(numericval));
    setStartingPoint(numericval);
  };

  let Int;

  const timer = (event) => {
    // console.log(event);
    if (event.key === "Enter") {
         Int = setInterval(() => {
          if(startingPoint > 1){
            setStartingPoint((startingPoint) => startingPoint - 1);
          }
        }, 1000);
    }
  };

  // if(startingPoint === 0) {
  //   clearInterval(Int);
  // }

  return (
    <>
      <input
        id="timeCount"
        type="number"
        placeholder="Enter the Timer value"
        onChange={getValue}
        onKeyDown={timer}
      ></input>
      <div id="current-time">{startingPoint}</div>
    </>
  );
};

export default App;
