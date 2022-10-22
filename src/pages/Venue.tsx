import React from "react";
import wedderlie from "../images/wedderlie.png";
import map from "../images/map.png";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import DistancesTable from "../components/DistancesTable";
import { Instagram, Language } from "@mui/icons-material";
import crest from "../images/crest.png";

const Venue: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Container>
        <div className="header">
          <div className="crest-container">
            <img src={crest} alt="crest" />
          </div>
          <header>
            <h2>Wedderlie House</h2>
          </header>
        </div>
        <img id="wedderlie" src={wedderlie} alt="" />
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
        <div className="image-container">
          <img id="map" src={map} alt="" />
        </div>
        <div className="table-container">
          <DistancesTable />
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Venue;

const Container = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .crest-container {
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 35%;
    img {
      width: 70%;
    }
  }
  .header {
    width: 100%;
    display: flex;
    header {
      width: 65%;
      display: flex;
      align-items: center;
      text-align: center;
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

  #wedderlie {
    width: 100%;
    margin: 0 auto;
  }

  .image-container {
    width: 100%;
    #map {
      width: 100%;
    }
  }
  .table-container {
    width: 100%;
    margin-top: 1rem;
  }
`;
