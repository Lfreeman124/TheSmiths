import React, { useState } from "react";
import styled from "styled-components";

const Countdown: React.FC = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("Jul 8, 2023 15:00:00").getTime();

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

  const times = [
    { js: state.days, string: "Days" },
    { js: state.hours, string: "Hours" },
    { js: state.minutes, string: "Minutes" },
    { js: state.seconds, string: "Seconds" },
  ];

  return (
    <Container>
      {times.map((each: any, index) => {
        return (
          <React.Fragment key={index}>
            <div className="tile">
              <p className="number">{each.js}</p>
              <p className="label">{each.string}</p>
            </div>
            <p id={each.string} className="colon">
              :
            </p>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default Countdown;

const Container = styled.div`
  display: flex;
  height: 80px;
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2rem;
  }
  .tile,
  .colon {
    height: 1rem;
  }
  .number {
    font-size: 1rem;
    padding-top: 0.2rem;
    margin: 0;
  }
  .colon {
    font-size: 1rem;
    margin-top: 5px;
  }
  #Seconds {
    display: none;
  }
  .label {
    font-size: 0.5rem;
    margin-top: 10px;
  }
`;
