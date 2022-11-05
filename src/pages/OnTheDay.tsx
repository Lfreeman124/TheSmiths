import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/MobileNavBar";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <Container>
      <MobileNavBar />
      <div className="schedule">
        <h1>Schedule</h1>
        <p>13:00 - Ceremony</p>
        <p>14:00 - Photos, drinks, canapes, lawn games, schmoozing</p>
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
  height: 100vh;
  .schedule {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    h1 {
      margin: 2rem;
      text-decoration: underline;
    }
    p {
      line-height: 2rem;
    }
  }
`;
