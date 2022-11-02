import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Wedderlie from "../images/wedderlie3.png";
import Blackbull from "../images/blackbull.jpg";
import Edinburgh from "../images/victoriastreet.jpg";
import { Link } from "react-router-dom";

const Accomodation: React.FC = () => {
  const options = [
    {
      name: "Wedderlie House",
      location: "Gordon",
      distanceToEdinburgh: "1hr",
      image: Wedderlie,
      website: "https://wedderliehouse.com/accomodation/",
      message:
        "If you received a message in your invitation with information for staying at Wedderlie House, we hope you can stay with us on site.",
      price:
        "We have booked all rooms as part of the venue. If you are able, a small contribution for the room is appreciated, but not expected.",
    },
    {
      name: "The Black Bull Hotel",
      location: "Lauder",
      distanceToEdinburgh: "45 min",
      distanceToWedderlie: "15 min",
      image: Blackbull,
      website: "https://blackbull-lauder.com/",
      message:
        "For those who would like to stay nearby Wedderlie, the Black Bull is only 15 minutes away in the town of Lauder. We have all 13 rooms set aside for our guests, and this will make transportation easier to organize for everyone.",
      price: "£115-145/nt",
    },
    {
      name: "Edinburgh",
      distanceToWedderlie: "1 hr",
      image: Edinburgh,
      website: "booking.com",
      message:
        "Perhaps you prefer to stay in the the city to make the most of your weekend away. Check out the suggestions from our friends on the Edinburgh page!",
      price: "£100-300/nt",
    },
  ];
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <h1>Accomodation Options</h1>
        <p>
          Our hope is to offer everyone the option to stay either at Wedderlie
          House or The Black Bull. If you can't find the information you need
          here or on the venue websites, or if you have any concerns, please
          reach out and we can find a solution.
        </p>
        {options.map((each, index) => {
          return (
            <div key={index} className="accomodation-container">
              <a href={each.website} target="_blank" rel="noreferrer">
                <h2>{each.name}</h2>
                <p>{each.location}</p>
                <div className="image-container">
                  <img src={each.image} alt="img" />
                </div>
              </a>
              <span>{each.message}</span>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Accomodation;

const Container = styled.div`
  width: 100%;
  color: black;
  text-decoration: none;
  .accomodation-container {
    a {
      color: black;
      text-decoration: none;
    }

    width: 90%;
    margin: 2rem auto;
  }
  .image-container {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
