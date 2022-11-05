import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/NavBar";

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
        <p>14:00 - Photos, drinks, lawn games, schmoozing</p>
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
    background: #e0c6b3;
    box-shadow: 0px 0px 30px 30px #e0c6b3;
    width: 50%;
    margin: 3rem auto;
    text-align: center;
    h1 {
      margin-bottom: 1rem;
      font-weight: 300;
      font-size: 1.5rem;
    }
    p {
      line-height: 2rem;
    }
  }
  @media only screen and (min-width: 600px) {
    .schedule {
      margin-top: 3rem;
      padding: 2rem;
    }
    .schedule p {
      line-height: 3rem;
    }
  }
`;
