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
          <img id="wedderlie" src={wedderlie} alt="" />
        </div>
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
        <a
          href="https://www.google.com/maps/place/Wedderlie+House/@55.9058629,-3.3056523,9z/data=!4m5!3m4!1s0x4887738e9ab230db:0x1083b8feb46b265e!8m2!3d55.7562332!4d-2.5751903"
          target="_blank"
          rel="noreferrer"
          className="image-container"
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .crest-container {
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 35%;
    img {
      border: solid 5px #70877f;
      @media only screen and (max-width: 600px) {
        border: solid 3px #70877f;
      }

      width: 70%;
    }
  }
  .header {
    background: #c9c3af;
    width: 100%;
    display: flex;
    header {
      width: 65%;
      display: flex;
      align-items: center;
      text-align: center;
      h1 {
        font-family: "Gwendolyn";
      }
    }
  }

  .blurb {
    margin: 2rem 0 0.5rem;
    text-align: center;
  }
  .links {
    * {
      margin: 5px;
    }
    margin-bottom: 1rem;
  }

  #wedderlie,
  .image-container,
  #map,
  .table-container {
    width: 100%;
  }

  .table-container {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 600px) {
    padding-top: 2rem;
    .desktop-layout {
      padding: 2rem;
      background: #c9c3af;
      width: 100%;
      display: flex;
      justify-content: center;
      .header {
        flex-direction: column;
        width: 30%;
        align-items: center;
        justify-content: center;
        header {
          display: none;
        }
        .crest-container {
          width: 100%;
          padding: 0;
        }
      }
      #wedderlie {
        width: 60%;
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
