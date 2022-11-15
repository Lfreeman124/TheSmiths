import React from "react";
import wedderlie from "../images/wedderlie.png";
import map from "../images/map.png";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import DistancesTable from "../components/DistancesTable";
import { Instagram, Language } from "@mui/icons-material";
import crest from "../images/crest.png";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/NavBar";

const colors = {
  red: "#4b3b40",
  beige: "hsl(35, 33%, 90%)",
  grey: "#d8d6da",
  green: "#70877f",
};

const Venue: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <MobileNavBar />

      <Container>
        <div className="desktop-layout">
          <div className="header">
            <div className="crest-container">
              <img src={crest} alt="crest" />
            </div>
            <header>
              <h1>Wedderlie House</h1>
            </header>
          </div>
          <div className="wedderlie-container">
            <img id="wedderlie" src={wedderlie} alt="" />
          </div>
        </div>
        <div className="blurb-and-links">
          <div className="blurb">
            <p>
              We are so excited to get married here. Wedderlie is a gorgeous
              estate with a rich history and a beautifully restored interior.
              Check out their website and social media for a sneak peek!
            </p>
          </div>
          <div className="links">
            <a
              href="https://www.instagram.com/wedderliehouse/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram sx={{ color: "black" }} />
            </a>
            <a
              href="https://wedderliehouse.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Language sx={{ color: "black" }} />
            </a>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Wedderlie+House/@55.9058629,-3.3056523,9z/data=!4m5!3m4!1s0x4887738e9ab230db:0x1083b8feb46b265e!8m2!3d55.7562332!4d-2.5751903"
          target="_blank"
          rel="noreferrer"
          className="map-container"
        >
          <img id="map" src={map} alt="" />
        </a>
        <div className="table-container">
          <DistancesTable />
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Venue;

const Container = styled.div`
  width: 100%;
  padding: 0 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .crest-container {
    @media only screen and (max-width: 600px) {
      display: none;
    }
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 35%;
    img {
      border: solid 5px ${colors.red};
      width: 70%;
    }
  }
  .header {
    color: ${colors.red};
    width: 100%;
    display: flex;
    header {
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      h1 {
        width: 100%;
        text-align: center;
        font-family: "Gwendolyn";
        background: ${colors.beige};
        border-radius: 10px;
        padding: 1rem 0;
      }
    }
  }
  .blurb-and-links {
    margin: 2rem 10%;
    width: 80%;

    background: hsla(35, 33%, 90%, 0.8);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    .blurb {
      margin: 1rem 1rem 0.5rem;
      text-align: center;
    }
    .links {
      * {
        color: ${colors.red};
        margin: 5px;
      }
      margin-bottom: 1rem;
    }
  }

  .wedderlie-container {
    width: 100%;
    background: hsla(342, 12%, 26%, 0.7);

    padding: 1rem;
    border-radius: 10px;
    #wedderlie {
      width: 100%;
    }
  }
  .map-container {
    width: 120%;
    margin-bottom: 3rem;
    #map {
      border: 5px solid ${colors.red};
      width: 100%;
    }
  }
  .table-container {
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    padding-top: 2rem;
    .desktop-layout {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .header {
        flex-direction: column;
        width: 15%;
        align-items: center;
        justify-content: center;
        header {
          display: none;
        }
        .crest-container {
          width: 100%;
          padding: 0;
          img {
            width: 100%;
          }
        }
      }
      .wedderlie-container {
        width: 70%;
      }
      #wedderlie {
        width: 100%;
      }
    }
    .blurb {
      width: 60%;
    }
    .image-container {
      width: 70%;
      margin: 1rem auto;
    }
    .table-container {
      width: 80%;
    }
  }
`;
