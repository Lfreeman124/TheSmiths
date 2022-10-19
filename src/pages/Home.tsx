import React from "react";
import us from "../images/us.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
const Home: React.FC = () => {
  return (
    <Banner>
      <h4>The best day of our lives</h4>
      <h1>--- Mr & Mrs ---</h1>
      <nav>
        <Link to="/venue">Venue</Link>
        <Link to="ontheday">On the Day</Link>
        <Link to="rsvp">RSVP</Link>
        <Link to="edinburgh">Edinburgh</Link>
        <Link to="registry">Registry</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <img src={us} alt=""></img>
      <Countdown />
    </Banner>
  );
};

export default Home;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  * {
    max-width: 90%;
  }
  h1 {
    font-size: 60px;
  }
  img {
    width: 60%;
  }
  nav {
    margin: 20px;
    > a {
      margin: 20px;
    }
  }
`;
