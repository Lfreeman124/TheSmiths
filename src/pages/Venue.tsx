import React, { useEffect } from "react";
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
import paper from "../images/texture.png";
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
    // var reveals = document.querySelectorAll(".reveal");
    // for (var i = 0; i < reveals.length; i++) {
    //   var elementTop = reveals[i].getBoundingClientRect().top;
    //   if (elementTop < windowHeight - 100) {
    //     reveals[i].classList.add("active");
    //   } else {
    //     reveals[i].classList.remove("active");
    //   }
    // }

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
      <Container>
        <MobileNavBar />
        <div className="green-line"></div>

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
  .green-line {
    width: 90%;
    margin: 0 5%;
    border-top: 5px solid #70877f;
  }
  .paper {
    /* background-image: url(${paper});
    background-size: 100%; */
    width: 90%;
    margin: 1rem 5% 0;
    border-radius: 10px;

    .desktop-layout {
      width: 100%;
      height: 100%;
      /* background: hsla(35, 33%, 85%, 0.7); */
      background: hsla(24, 22%, 65%, 0.3);
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
    width: 80%;
    margin: 1rem 10% 0;
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
    margin: 1rem 0 5rem;
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
      left: 68%;
      top: 65%;
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
