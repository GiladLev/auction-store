import React, { useEffect, useState } from "react";

const Clock = ({ endAuction, timeCounter, setTimeCounter }) => {



  useEffect(() => {
    
    setTimeout(() => {
      timeleft(endAuction);
    }, 1000)
  }, [timeCounter]);

  function timeleft(endAuction) {
    const endTimeInMS = Date.parse(endAuction);
    const TimeInMS = Date.parse(new Date());
    const timeLeft = endTimeInMS - TimeInMS;
    
    if (endTimeInMS > TimeInMS) {
      let seconds = Math.floor(timeLeft / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      hours = hours % 24;
      seconds = seconds % 60;
      minutes = minutes % 60;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setTimeCounter(days + " days  " + hours + ":" + minutes + ":" + seconds + "  hours");
    } else {
        setTimeCounter("The auction ended");
    }
  }
  return (
    <>
      <div>{timeCounter}</div>
    </>
  );
};

export default Clock;
