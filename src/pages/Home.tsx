import React from "react";
import us from "../images/us.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  const { showMenu, isMobile } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <Container>
      {isMobile && <NavBar />}
      <Banner>
        <h3>The best day of our lives</h3>
        <h2>--- Mr & Mrs ---</h2>
        {!isMobile && (
          <nav>
            <Link to="/venue">Venue</Link>
            <Link to="/ontheday">On the Day</Link>
            <Link to="/rsvp">RSVP</Link>
            <Link to="/honeymoon">Honeymoon</Link>
            <Link to="/request">Song Requests</Link>
            <Link to="/edinburgh">Edinburgh</Link>
            <Link to="/registry">Registry</Link>
            <Link className="last" to="/faq">
              FAQ
            </Link>
          </nav>
        )}
        <img src={us} alt=""></img>
        <Countdown />
      </Banner>
      <div className="button-container">
        <Link to="/rsvp">
          <Button className="button" size="large" fullWidth variant="contained">
            RSVP
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 600px) {
    padding-top: 4rem;
  }
  .button-container {
    margin: 1rem;
    width: 50%;
    .button {
      text-decoration: none;
    }
  }
`;

const Banner = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  * {
    max-width: 90%;
  }
  h3 {
    font-family: "Gwendolyn";
  }
  h2 {
    font-size: 2.5rem;
    margin: 1rem auto;
    font-weight: 200;
  }
  img {
    margin: 1rem;
    width: 60%;
  }
  nav {
    margin: 20px;
    > a {
      margin: 10px;
      padding-right: 20px;
      text-decoration: none;
      color: #4b3b40;
      border-right: 1px solid #4b3b40;
    }
    .last {
      border-right: none;
    }
  }
`;
