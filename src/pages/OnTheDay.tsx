import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/NavBar";
import frame from "../images/frame.png";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <Container>
      <MobileNavBar />
      <div className="schedule" style={{ backgroundImage: `url(${frame})` }}>
        <h1>Order of Service</h1>
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
  height: 700px;
  .schedule {
    margin-top: -3rem;
    background-size: 120% 600px;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 600px;
    text-align: center;
    h1 {
      padding-top: 7.5rem;
      font-family: "Gwendolyn";
      margin-bottom: 0.5rem;
      /* font-weight: 300; */
      font-size: 1.5rem;
    }
    p {
      width: 100%;
      padding: 0 25%;
      line-height: 2rem;
    }
  }
  @media only screen and (min-width: 600px) {
    .schedule {
      margin-top: 1rem;
      background-size: 80% 700px;
      padding: 2rem;
      h1 {
        padding-top: 4.5rem;
        font-size: 2rem;
      }
    }
    .schedule p {
      line-height: 2.5rem;
    }
  }
`;
