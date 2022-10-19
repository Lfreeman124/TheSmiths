import React, { useState } from "react";
import styled from "styled-components";

const Countdown: React.FC = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("Jul 8, 2023 13:00:00").getTime();

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // Update the count down every 1 second

  const flipIt = () => {
    const now = new Date().getTime();

    // Find the distance between now and the wedding
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setState((prev: any) => ({
      ...prev,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }));
  };
  setInterval(() => {
    flipIt();
  }, 1000);

  return (
    <Container>
      <div className="tile">
        <p className="number">{state.days}</p>
        <p className="label">Days</p>
      </div>
      <div className="colon">:</div>
      <div className="tile">
        <p className="number">{state.hours}</p>
        <p className="label">Hours</p>
      </div>
      <div className="colon">:</div>
      <div className="tile">
        <p className="number">{state.minutes}</p>
        <p className="label">Minutes</p>
      </div>
      <div className="colon">:</div>
      <div className="tile">
        <p className="number">{state.seconds}</p>
        <p className="label">Seconds</p>
      </div>
    </Container>
  );
};

export default Countdown;

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
  }
  .tile,
  .colon {
    height: 200px;
  }
  .number {
    font-size: 72px;
    margin: 0;
  }
  .colon {
    font-size: 60px;
  }
  .label {
    font-size: 40px;
    margin-top: 10px;
  }
`;
