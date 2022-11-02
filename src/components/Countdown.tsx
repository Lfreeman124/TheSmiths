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
      <p className="colon">:</p>
      <div className="tile">
        <p className="number">{state.hours}</p>
        <p className="label">Hours</p>
      </div>
      <p className="colon">:</p>
      <div className="tile">
        <p className="number">{state.minutes}</p>
        <p className="label">Minutes</p>
      </div>
      <p className="colon">:</p>
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
  margin-top: 2rem;
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
  }
  .tile,
  .colon {
    height: 2rem;
  }
  .number {
    font-size: 2.5rem;
    padding-top: 0.2rem;
    margin: 0;
  }
  .colon {
    font-size: 2.5rem;
    margin-top: 0;
  }
  .label {
    font-size: 1rem;
    margin-top: 10px;
  }
`;
