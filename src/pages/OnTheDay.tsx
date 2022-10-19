import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const OnTheDay: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <div className="schedule">
        <h1>Schedule</h1>
        <p>13:00 - Ceremony</p>
        <p>13:30 - Photos, drinks, canapes, lawn games, schmoozing</p>
        <p>16:30 - Speeches</p>
        <p>17:00 - Wedding Breakfast</p>
        <p>20:00 - First Dance</p>
        <p>00:30 - Bar closes</p>
        <p>01:00 - Taxi time</p>
      </div>
    </Container>
  );
};

export default OnTheDay;

const Container = styled.div`
  .schedule {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
`;
