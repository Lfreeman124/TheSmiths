import React, { useState, useEffect } from "react";
import us from "../images/us.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import NavBar from "../components/NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Honeymoon from "../components/Honeymoon";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    setIsMobile(matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      {isMobile && <NavBar />}
      <Banner>
        <h3>The best day of our lives</h3>
        <h1>--- Mr & Mrs ---</h1>
        {!isMobile && (
          <nav>
            <Link to="/venue">Venue</Link>
            <Link to="/ontheday">On the Day</Link>
            <Link to="/rsvp">RSVP</Link>
            <Link to="/edinburgh">Edinburgh</Link>
            <Link to="/registry">Registry</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        )}
        <img src={us} alt=""></img>
        <Countdown />
      </Banner>
      <Honeymoon />
    </React.Fragment>
  );
};

export default Home;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  * {
    max-width: 90%;
  }
  h3 {
    font-family: "gwendolyn";
  }
  h1 {
    font-size: 3rem;
    margin: 10px auto;
  }
  img {
    width: 60%;
  }
  nav {
    margin: 20px;
    > a {
      margin: 10px;
    }
  }
`;
