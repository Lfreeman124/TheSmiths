import React from "react";
import wedderlie from "../images/wedderlie.png";
import map from "../images/map2.png";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import DistancesTable from "../components/DistancesTable";
import { Instagram, Language } from "@mui/icons-material";
import crest from "../images/crest.png";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/NavBar";
import flowers from "../images/flowers.png";
import paper from "../images/paper.jpg";
import arrow from "../images/arrow.png";
const colors = {
  red: "#4b3b40",
  beige: "hsl(35, 33%, 90%)",
  grey: "#d8d6da",
  green: "#70877f",
};

const Venue: React.FC = () => {
  const { showMenu } = useGlobalContext();
  var windowHeight = window.innerHeight;

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 200) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <Container>
        <MobileNavBar />
        <div className="paper">
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

            <div className="blurb-and-links">
              <div className="blurb">
                <p>
                  We are so excited to get married here. Wedderlie is a gorgeous
                  estate with a rich history and a beautifully restored
                  interior. Check out their website and social media for a sneak
                  peek!
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
          </div>
        </div>
        <div className="image-container">
          <img src={flowers} alt="flowers" />
        </div>
        <a
          href="https://www.google.com/maps/place/Wedderlie+House/@55.9058629,-3.3056523,9z/data=!4m5!3m4!1s0x4887738e9ab230db:0x1083b8feb46b265e!8m2!3d55.7562332!4d-2.5751903"
          target="_blank"
          rel="noreferrer"
          className="map-container"
        >
          <img src={arrow} alt="arrow" className="reveal" />
          <img id="map" src={map} alt="" />
          <iframe
            src="https://giphy.com/embed/pctSgguhp2F0bgBg6r"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy reveal"
            allowFullScreen
          ></iframe>
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
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

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
  .paper {
    background-image: url(${paper});
    background-size: 50%;
    width: 90%;
    margin: 0 5%;
    border-radius: 10px;

    .desktop-layout {
      width: 100%;
      height: 100%;
      background: hsla(35, 33%, 70%, 0.3);
      border-radius: 10px;
      padding-bottom: 2rem;
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
            margin: 2rem 0 0;
          }
        }
      }
      .wedderlie-container {
        width: 80%;
        margin: 0 10%;
        height: 200px;
        /* background: hsla(342, 12%, 26%, 0.5); */
        overflow: hidden;
        padding: 1rem;
        opacity: 0.8;

        #wedderlie {
          margin-left: -25%;
          height: 100%;
        }
      }
      .blurb-and-links {
        margin: 1rem 10% 0;
        width: 80%;
        background: hsla(342, 12%, 26%, 0.1);
        border: 1px dotted ${colors.red};
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        .blurb {
          margin: 1rem 1rem 0.5rem;
          text-align: center;
          line-height: 1.5rem;
        }
        .links {
          * {
            color: ${colors.red};
            margin: 5px;
          }
          margin-bottom: 1rem;
        }
      }
    }
  }

  .image-container {
    width: 100%;
    display: flex;
    background: hsl(270, 10%, 25%);

    img {
      width: 100%;
      opacity: 0.8;
    }
  }

  .map-container {
    width: 100%;
    height: 250px;
    margin: 1rem 0 5rem;
    #map {
      border-top: 5px solid ${colors.green};
      border-bottom: 5px solid ${colors.green};
      height: 100%;
    }
    .reveal {
      color: ${colors.red};
      position: relative;
      width: 40px;
      left: 65%;
      top: 85%;
      transform: translate(-150px, -150px);
      opacity: 0;
      transition: 0.5s all ease-in;
      transition-delay: 1s;
    }
    .reveal.active {
      transform: translate(0, 0);
      opacity: 1;
    }
    .giphy {
      width: 50%;
      position: relative;
      top: -390px;
      left: 50%;
      opacity: 0;
      transition-delay: 2s;
      transform: translate(0, 0);
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
