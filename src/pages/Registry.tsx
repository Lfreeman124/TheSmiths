import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import amazon from "../images/amazon.svg";
import beach from "../images/beach.jpg";
import ellos from "../images/ellos.png";
import restaurant from "../images/restaurant.png";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();

  const options = [
    {
      id: "amazon1",
      name: "Amazon.se Gift Card",
      image: amazon,
      link: "https://www.amazon.se/Amazon-307_SE_Email-E-presentkort-fr%C3%A5n-Amazon-se/dp/B089VNKFM7/ref=sr_1_3?crid=2CC2TWYN3I2PV&keywords=presentkort&qid=1665935765&qu=eyJxc2MiOiIwLjc0IiwicXNhIjoiMC4zMSIsInFzcCI6IjAuMjQifQ%3D%3D&sprefix=presentkort%2Caps%2C86&sr=8-3",
    },
    {
      id: "amazon2",
      name: "Amazon.com Gift Card",
      image: amazon,
      link: "https://www.amazon.com/Amazon-eGift-Card-Logo/dp/B07PCMWTSG/ref=sr_1_1?adgrpid=81403773503&gclid=Cj0KCQjw166aBhDEARIsAMEyZh555howLLzetDSHn27DWltE_ga6Hu-n5Lnh-JDcuD2pTiHCLn5e8g0aAlqpEALw_wcB&hvadid=585412561882&hvdev=c&hvlocint=1010826&hvlocphy=9062455&hvnetw=g&hvqmt=b&hvrand=14939444062267236933&hvtargid=kwd-315218542453&hydadcr=22339_13333066&keywords=amazon+e+gift+card&qid=1665935825&qu=eyJxc2MiOiIyLjgyIiwicXNhIjoiMS43OCIsInFzcCI6IjEuNjMifQ%3D%3D&sr=8-1",
    },
    {
      id: "ellos",
      name: "Ellos Gift Card",
      image: ellos,
      link: "https://www.ellos.se/presentkort",
    },
    {
      id: "honeymoon",
      name: "Honeymoon Fund",
      image: beach,
      description:
        "If you would like to help us fund our honeymoon, we will humbly accept monetary gifts in Scotland.",
    },
    {
      id: "restaurant",
      name: "Restaurant Gift Card / Suggestion",
      image: restaurant,
      description: `We love food, and always appreciate a night out. ${(
        <a
          href="https://www.google.com/maps/search/Restaurants/@59.3255176,18.023726,13z/data=!3m1!4b1"
          target="_blank"
          rel="noreferrer"
        >
          Find a restaurant
        </a>
      )} in Stockholm that you think we would enjoy and treat us to
      dessert or a drink.`,
    },
  ];
  return showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <NavBar />

      <Container>
        <div className="header">
          <h1>Registry</h1>
          <p>
            The best gift you can give us is your presence on our special day.
            Many of you will spend a considerable amount just to get to
            Scotland, and that is in itself a generous gift and we are honored
            you take the time and commitment to travel and be with us.
          </p>

          <p>
            If you're adamant about giving us a gift, here are some options to
            give you some inspiration. Please don't bring anything
            bigger/heavier than a greeting card. If none of these seem right for
            you, just wait and someday years from now you might come across the
            perfect gift.
          </p>
        </div>
        <div className="options">
          {options.map((each: any, index) => (
            <a
              key={index}
              href={each.link}
              target="_blank"
              rel="noreferrer"
              className="options-tile"
            >
              <div className="image-container" id={each.id}>
                <img src={each.image} alt={each.name} />
              </div>
              <h2>{each.name}</h2>
              <p className="description">
                {each.description && each.description}
              </p>
            </a>
          ))}
        </div>
        <div className="notes">
          <p>
            When navigating to a Swedish website, use Chrome and&nbsp;
            <a
              href="https://support.google.com/chrome/answer/173424?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Translate%20webpages%20in%20Chrome&text=On%20your%20computer%2C%20open%20Chrome,will%20translate%20your%20current%20webpage."
              target="_blank"
              rel="noreferrer"
            >
              translate the page
            </a>
            . Amazon and Ellos should accept foreign cards.
          </p>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default OnTheDay;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Gwendolyn";
    font-size: 2rem;
  }

  .header,
  .notes {
    font-size: 20px;
    width: 90%;
    margin: 1rem auto;
    text-align: center;
  }
  .header p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 1rem 0;
  }
  .options {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .options-tile {
      margin: 1rem;
      width: 150px;
      .image-container {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid black;
        overflow: hidden;
      }
    }
    h2 {
      width: 100%;
      text-align: center;
      color: black;
      text-decoration: none;
    }
    a:link {
      text-decoration: none;
    }
    #amazon1,
    #amazon2 {
      background: rgb(255, 153, 0);
    }
    #ellos {
      background: rgb(123, 57, 52);
    }
    #amazon1 img,
    #amazon2 img {
      height: 50%;
      margin: 30px 22px;
    }
    #ellos img {
      width: 100%;
      margin-top: 20px;
    }
    #honeymoon img {
      height: 100%;
      margin-left: -70px;
    }
    #restaurant img {
      height: 100%;
    }
    .description {
      margin-top: 0.5rem;
      text-align: center;
    }
  }
  @media only screen and (min-width: 600px) {
    .header {
      padding: 3rem 3rem 1rem;
      margin: 2rem auto;
    }
  }
`;
