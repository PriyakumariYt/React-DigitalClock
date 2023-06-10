import React, { useState } from "react";
const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();
  const [currtime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
    };
    setInterval(UpdateTime, 1000);
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>{currtime}</h1>
        </div>
      </div>
    </>
  );
};
export default DigitalClock;
