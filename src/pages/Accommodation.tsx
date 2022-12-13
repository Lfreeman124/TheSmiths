import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import NavBar from "../components/NavBar";
import Wedderlie from "../images/wedderlie3.png";
import Blackbull from "../images/blackbull.jpg";
import Edinburgh from "../images/victoriastreet.jpg";
import { useGlobalContext } from "../State";
import flowers from "../images/flowers5.png";

const colors = {
  red: "#4b3b40",
  beige: "hsl(35, 33%, 90%)",
  grey: "#d8d6da",
  green: "#70877f",
};
const Accommodation: React.FC = () => {
  const { showMenu } = useGlobalContext();

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
      website:
        "https://www.booking.com/index.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaMgBiAEBmAEJuAEHyAEM2AED6AEBiAIBqAIDuALP16CbBsACAdICJDYwZTU4MGIxLWE0YzYtNDE5Ni1hMGI2LTQ3OWE3ODhjYjgxY9gCBOACAQ&sid=67efeac07628c652335a4c0938833593&sb_price_type=total&changed_currency=1&selected_currency=USD&top_currency=1",
      message:
        "Perhaps you prefer to stay in the the city to make the most of your weekend away. Check out the suggestions from our friends on the Edinburgh page!",
      price: "£100-300/nt",
    },
  ];
  return showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <NavBar />
      <Container>
        <div className="green-line"></div>
        <div className="header">
          <h1>Accommodation</h1>
          <p>
            Our hope is to offer everyone the option to stay either at Wedderlie
            House or The Black Bull. We have set aside all rooms at both venues
            and will contact you individually with further information in
            February. There's no need to contact/book/reserve at this time. If
            you can't find the information you need here or on the venue
            websites, or if you have any concerns, please reach out and we can
            find a solution.
          </p>
        </div>
        <div className="flowers-container">
          <img src={flowers} alt="flowers" />
        </div>

        {options.map((each, index) => {
          return (
            <div key={index} className="accommodation-container">
              <a href={each.website} target="_blank" rel="noreferrer">
                <div className="name-and-location">
                  <h2>{each.name}</h2>
                  <p>{each.location}</p>
                </div>
                <div className="image-container">
                  <img src={each.image} alt="img" />
                </div>
              </a>
              <div className="desktop-flex">
                <p>{each.message}</p>
                <ul>
                  {each.distanceToEdinburgh && (
                    <li>Distance to Edinburgh: {each.distanceToEdinburgh}</li>
                  )}
                  {each.distanceToWedderlie && (
                    <li>Distance to Wedderlie: {each.distanceToWedderlie}</li>
                  )}
                  <li>Price: {each.price}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Accommodation;

const Container = styled.div`
  width: 100%;
  color: ${colors.red};
  text-decoration: none;
  padding: 0 1rem 3rem;

  .green-line {
    width: 100%;
    margin: 0.5rem 0 0;
    border-top: 5px solid #70877f;
  }
  p {
    line-height: 1.5rem;
  }
  .header {
    width: 90%;
    margin: 2rem 5% 0;
    padding: 1rem 2rem;
    background: hsla(24, 22%, 65%, 0.3);
    border-radius: 10px;
    text-align: center;

    h1 {
      font-family: "Gwendolyn";
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }

  .flowers-container {
    width: 80%;
    display: flex;
    background: hsla(34, 15%, 54%);
    margin: 1rem auto -2rem;
    img {
      width: 100%;
      opacity: 0.8;
    }
  }
  .accommodation-container {
    width: 100%;
    padding: 1rem;
    margin-top: 3rem;
    border-top: 5px solid #70877f;

    a {
      color: ${colors.red};

      text-decoration: none;
    }
    .name-and-location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        margin: 0;
        font-weight: 300;
      }
    }
    .image-container {
      width: 100%;
      margin: 1rem 0;
      img {
        border-radius: 5px;
        width: 100%;
      }
    }
    ul {
      margin-top: 1rem;
      li {
        margin: 5px 0 5px -1rem;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    width: 80%;
    margin: 0 10%;
    @media only screen and (min-width: 900px) {
      width: 70%;
      margin: 0 15%;
    }

    .flowers-container {
      margin-bottom: 1rem;
      width: 60%;
    }
    .accommodation-container {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      a {
        width: 50%;
      }
      .desktop-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
      }
    }
    .accommodation-container:nth-of-type(odd) {
      flex-direction: row-reverse;
    }
  }
`;
