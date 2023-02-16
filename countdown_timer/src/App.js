import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [startingPoint, setStartingPoint] = useState("");
  const getValue = (event) => {
    let numericval = Number(event.target.value);
    // console.log(typeof(numericval));
    setStartingPoint(Math.floor(numericval));
  };

  var Int;
  let countEnter = 0;
  const timer = (event) => {
    // console.log(event);
    if(event.key === "Enter" && countEnter === 0){
      countEnter = countEnter + 1;
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
  // Not abel to clear interval hence, did the optional rendering only if the value > 0, if it's < 0, then time over will be shown.
  return (
    <>
      <p><ul>
        <li>Please don't press enter key again, if the timer is already running.</li>
        <li>You can change the timer value, while its running, on value change it will start from the new value.</li>
        <li>If you want to run the timer again, refresh page and enter the value and press Enter key</li>
      </ul></p>
      <input
        id="timeCount"
        type="number"
        placeholder="Enter the Timer value"
        onChange={getValue}
        onKeyDown={timer}
      ></input>
      <div id="current-time">
        {startingPoint >= 0 && (
          <>
            {startingPoint}
          </> 
        ) || startingPoint < 0 && (
          <>
            <p>0</p>
            <p>Time Over !!!</p>
          </>
        )} 
      </div>
    </>
  );
};

export default App;
