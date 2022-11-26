import React, { useState } from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/NavBar";
import dancing from "../images/dancing.webp";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();
  const [loading, setLoading] = useState(true);
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
      <div style={{ display: loading ? "none" : "block" }} className="dance">
        <img
          onLoad={() => setLoading(false)}
          style={{ display: loading ? "hidden" : "block" }}
          src={dancing}
          alt="dance"
        />
      </div>
      {/* <div className="cover"></div> */}
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
    /* box-shadow: 0px 10px 10px 10px #eae8e3; */
    .line {
      /* background: #70877f; */
      border-right: 2px dotted #70877f;
      width: 1px;
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
        font-size: 2rem;
      }
      p {
        width: 100%;
        line-height: 1.2rem;
      }
    }
  }

  .dance {
    margin-top: 270px;
    width: 100%;
    background: hsla(34, 15%, 54%);
    img {
      width: 100%;
      opacity: 0.8;
    }
  }
  .cover {
    width: 100%;
    height: 30px;
    background: #eae8e3;
    position: relative;
    z-index: 10;
    margin-top: -5px;
  }
  @media only screen and (min-width: 600px) {
    .schedule-container {
      width: 80%;
      margin: 3rem 10% 0%;
    }
  }
  @media only screen and (min-width: 900px) {
    .schedule-container {
      width: 60%;
      margin: 0;
      .schedule {
        margin-top: 1rem;
        background-size: 80% 700px;
        padding: 5% 10%;
        h1 {
          padding-top: 2rem;
          font-size: 2rem;
        }
        p {
          line-height: 2rem;
        }
      }
    }
    .dance {
      width: 40%;
      margin: 0 0 0 50%;
    }
  }
`;
