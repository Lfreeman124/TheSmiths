import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/NavBar";
import dancing from "../images/dancing.webp";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <Container>
      <MobileNavBar />
      <div className="schedule-container">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>

        <div className="schedule">
          <h1>Order of Service</h1>
          <p>13:00 - Ceremony</p>
          <p>14:00 - Photos, drinks, lawn games, schmoozing</p>
          <p>16:30 - Speeches</p>
          <p>17:00 - Wedding Breakfast</p>
          <p>20:00 - First Dance</p>
          <p>00:30 - Bar closes</p>
          <p>01:00 - Taxi time</p>
        </div>
        <div className="line line5"></div>
        <div className="line line6"></div>
        <div className="line line7"></div>
        <div className="line line8"></div>
      </div>
      <div className="dance">
        <img src={dancing} />
      </div>
      <div className="cover"></div>
    </Container>
  );
};

export default OnTheDay;

const Container = styled.div`
  color: #4b3b40;
  padding-bottom: 1rem;
  .schedule-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 5;
    .line {
      background: #4b3b40;
      width: 2px;
      margin: 0 2px;
    }
    .line1 {
      height: 200px;
    }
    .line2 {
      height: 150px;
    }
    .line3 {
      height: 100px;
    }
    .line4 {
      height: 50px;
    }
    .line5 {
      height: 50px;
      align-self: end;
    }
    .line6 {
      height: 100px;
      align-self: end;
    }
    .line7 {
      height: 150px;
      align-self: end;
    }
    .line8 {
      height: 200px;
      align-self: end;
    }

    .schedule {
      width: 60%;
      margin: 0 1rem;
      text-align: center;

      h1 {
        font-family: "Gwendolyn";
        font-size: 1.5rem;
      }
      p {
        width: 100%;
        line-height: 1.2rem;
      }
    }
  }

  .dance {
    margin-top: 280px;
    width: 100%;
    background: hsl(270, 10%, 25%);
    img {
      width: 100%;
      opacity: 0.8;
    }
  }
  .cover {
    width: 100%;
    height: 30px;
    background: #d8d6da;
    position: relative;
    z-index: 10;
    margin-top: -5px;
  }
  @media only screen and (min-width: 600px) {
    .schedule {
      margin-top: 1rem;
      background-size: 80% 700px;
      padding: 2rem;
      h1 {
        padding-top: 2rem;
        font-size: 2rem;
      }
    }
    .schedule p {
      line-height: 2rem;
    }
  }
`;
