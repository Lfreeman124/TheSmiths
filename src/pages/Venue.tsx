import React, { useEffect } from "react";
import wedderlie from "../images/wedderlie5.png";
import map from "../images/map2.png";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import DistancesTable from "../components/DistancesTable";
import { Instagram, Language } from "@mui/icons-material";
import crest from "../images/crest.png";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";
import flowers from "../images/flowers.png";
import arrow from "../images/arrow.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
const colors = {
  red: "#4b3b40",
  beige: "hsl(35, 33%, 90%)",
  grey: "#d8d6da",
  green: "#70877f",
};

const Venue: React.FC = () => {
  const { showMenu } = useGlobalContext();
  var windowHeight = window.innerHeight;

  var animations = [
    ".heart1",
    ".heart2",
    ".heart3",
    ".heart4",
    ".heart5",
    ".reveal",
  ];

  function reveal() {
    for (var j = 0; j < animations.length; j++) {
      var element = document.querySelector(animations[j]);
      var heartTop = element?.getBoundingClientRect().top;
      if (heartTop && heartTop < windowHeight - 100) {
        element?.classList.add("active");
      } else {
        element?.classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  useEffect(() => {
    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal);
      return () => window.removeEventListener("load", reveal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <NavBar />

      <Container>
        <div className="green-line"></div>

        <div className="desktop-layout">
          <h1>Wedderlie House</h1>
          <div className="crest-and-pic">
            <div className="crest-container">
              <div className="image-container">
                <img src={crest} alt="crest" />
              </div>
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
                <Instagram sx={{ color: "#4b3b40" }} />
              </a>
              <a
                href="https://wedderliehouse.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Language sx={{ ccolor: "#4b3b40" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="flowers-container">
          <img src={flowers} alt="flowers" />
        </div>
        <div className="green-line"></div>

        <a
          href="https://www.google.com/maps/place/Wedderlie+House/@55.9058629,-3.3056523,9z/data=!4m5!3m4!1s0x4887738e9ab230db:0x1083b8feb46b265e!8m2!3d55.7562332!4d-2.5751903"
          target="_blank"
          rel="noreferrer"
          className="map-container"
        >
          <img src={arrow} alt="arrow" className="reveal" />
          <div className="hearts">
            <FavoriteIcon className="heart heart1" id="heart1" />
            <FavoriteIcon className="heart heart2" id="heart2" />
            <FavoriteIcon className="heart heart3" id="heart3" />
            <FavoriteIcon className="heart heart4" id="heart4" />
            <FavoriteIcon className="heart heart5" id="heart5" />
          </div>
          <img id="map" src={map} alt="" />
        </a>
        <DistancesTable />
      </Container>
    </React.Fragment>
  );
};
export default Venue;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 3rem;
  color: #4b3b40;

  .green-line {
    width: 100%;
    margin: 0.5rem 0 1rem;
    border-top: 5px solid #70877f;
  }

  .desktop-layout {
    width: 90%;
    height: 100%;
    background: hsla(24, 22%, 65%, 0.3);
    border-radius: 10px;
    padding-bottom: 2rem;
    margin: 1rem 5%;
    h1 {
      width: 100%;
      text-align: center;
      color: ${colors.red};
      font-family: "Gwendolyn";
      font-size: 2rem;
      margin: 2rem auto 0;
    }

    .crest-container {
      display: none;
    }

    .wedderlie-container {
      width: 80%;
      height: auto;
      display: flex;
      margin: 1rem 10% 2rem;
      overflow: hidden;
      border-radius: 5px;

      box-shadow: 10px 10px 5px 0px ${colors.red};

      #wedderlie {
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }
    }
    .blurb-and-links {
      margin: 1rem 10% 1rem;
      width: 80%;
      background: hsla(34, 15%, 91%, 0.7);
      border: 1px dotted ${colors.red};
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      .blurb {
        margin: 1rem 1rem 0;
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

  .flowers-container {
    width: 80%;
    margin: 1rem auto 0;
    display: flex;
    /* background: hsl(270, 10%, 25%); */
    background: hsla(34, 15%, 54%);

    img {
      width: 100%;
      opacity: 0.8;
    }
  }

  .map-container {
    width: 100%;
    height: 250px;
    margin: 1rem 0 5rem -10%;
    position: relative;
    #map {
      border-top: 5px solid ${colors.green};
      border-bottom: 5px solid ${colors.green};
      height: 100%;
    }
    .reveal {
      color: ${colors.red};
      position: absolute;
      width: 40px;
      left: 69%;
      top: 75%;
      transform: translate(-150px, -150px) rotate(-20deg);
      opacity: 0;
      transition: 0.5s all ease-in;
      transition-delay: 1s;
    }
    .reveal.active {
      transform: translate(0, 0) rotate(20deg);
      opacity: 1;
    }
    .hearts {
      position: relative;
      width: 20px;
      height: 20px;
      left: 72%;
      top: 64%;
      .heart {
        width: 20px;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
      }

      .heart1.active {
        color: #dba4a4;
        /* color: red; */
        animation: heart1 2s linear;
        animation-delay: 1.5s;
      }
      .heart2.active {
        color: #d39090;
        /* color: orange; */

        animation: heart2 2s linear;
        animation-delay: 1.6s;
      }
      .heart3.active {
        color: #cb7d7d;
        /* color: yellow; */

        animation: heart3 2s linear;
        animation-delay: 1.8s;
      }
      .heart4.active {
        color: #c36969;
        /* color: green; */

        animation: heart4 2s linear;
        animation-delay: 1.9s;
      }
      .heart5.active {
        color: #bc5656;
        /* color: blue; */

        animation: heart5 2s linear;
        animation-delay: 2.1s;
      }
      @keyframes heart1 {
        30% {
          transform: translate(-15px, -80px);
          opacity: 1;
        }
        60% {
          transform: translate(15px, -140px);
        }
        90% {
          transform: translate(-20px, -190px);
          opacity: 0;
        }
      }
      @keyframes heart2 {
        40% {
          transform: translate(15px, -60px);
          opacity: 1;
        }
        60% {
          transform: translate(-30px, -130px);
          width: 30px;
        }
        90% {
          transform: translate(10px, -180px);
          opacity: 0;
          width: 20px;
        }
      }
      @keyframes heart3 {
        30% {
          transform: translate(-20px, -40px);
          opacity: 1;
        }
        70% {
          transform: translate(25px, -145px);
        }
        90% {
          transform: translate(-30px, -230px);
          opacity: 0;
        }
      }
      @keyframes heart4 {
        20% {
          transform: translate(20px, -20px);
          opacity: 1;
        }
        60% {
          transform: translate(-25px, -160px);
          width: 30px;
        }
        90% {
          transform: translate(0px, -240px);
          opacity: 0;
          width: 20px;
        }
      }
      @keyframes heart5 {
        30% {
          transform: translate(-26px, -40px);
          opacity: 1;
        }
        65% {
          transform: translate(9px, -100px);
        }
        85% {
          transform: translate(-35px, -200px);
          opacity: 0;
        }
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
    .desktop-layout {
      padding: 2rem;
      h1 {
        margin: 1rem;
        padding: 0;
      }
      .crest-and-pic {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 5px dotted hsla(342, 12%, 26%, 0.7);
        .crest-container {
          display: flex;
          justify-content: center;
          width: 35%;
          .image-container {
            width: 80%;
            height: auto;
            background: hsla(24, 100%, 15%);
            img {
              opacity: 0.8;
              width: 100%;
              height: 100%;
            }
          }
        }
        .wedderlie-container {
          width: 50%;
          overflow: hidden;
          padding: 0;
          margin: 2rem;
          height: auto;
          border-radius: 5px;
          #wedderlie {
            border-radius: 5px;

            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
          }
        }
      }

      .blurb-and-links {
        width: 70%;
        margin: 1rem auto;
      }
    }
    .flowers-container {
      width: 60%;
    }

    .map-container {
      width: 90%;
      height: auto;
      margin: 3rem 5%;
      #map {
        width: 100%;
        border: none;
      }
      .reveal {
        left: 53%;
        top: 70%;
      }
      .hearts {
        position: absolute;
        left: 55%;
        bottom: -74%;
      }
    }
  }
`;
