import React from "react";
import wedderlie from "../images/wedderlie.png";
import map from "../images/map.png";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import DistancesTable from "../components/DistancesTable";
// import InstagramIcon from "@mui/icons-material/Instagram";
import crest from "../images/crest.png";

const Venue: React.FC = () => {
  return (
    <Container>
      <NavBar />

      <img id="wedderlie" src={wedderlie} alt="" />
      <div className="info">
        <div className="crest-container">
          <img src={crest} alt="crest" />
        </div>
        <div className="blurb">
          <p>
            We are so excited to get married here. Wedderlie is a gorgeous
            estate with a rich history and a beautifully restored interior.
            Check out their website and social media for more sneak peeks!
          </p>

          <div className="links"></div>
        </div>
      </div>

      <div className="image-container">
        <img id="map" src={map} alt="" />
      </div>
      <p>
        We will prearrange transportation for those not staying at Wedderlie.
        Please RSVP as soon as possible, so that we can finalize accomodation
        arrangements and transportation.
      </p>
      <div className="table-container">
        <DistancesTable />
      </div>
    </Container>
  );
};
export default Venue;

const Container = styled.div`
  padding: 3em;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .crest-container {
    padding: 40px;
    width: 40%;
    img {
      width: 100%;
    }
  }
  .info {
    display: flex;
  }
  #wedderlie {
    width: 100%;
    margin: 0 auto;
  }
  .table-container {
    width: 70%;
  }
  .image-container {
    width: 60%;
  }
  #map {
    width: 100%;
  }
`;
