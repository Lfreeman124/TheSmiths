import React, { useEffect, useState } from "react";
import us from "../images/us3.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";
import { Button } from "@mui/material";
import background from "../images/babysbreath2down.png";
import wedderlie from "../images/wedderlie3.png";
import thistle from "../images/try2.png";
import concrete from "../images/concrete-min.jpg";
import hands from "../images/hands3.png";
import backgroundUpside from "../images/babys-breath-up.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Home: React.FC = () => {
  const { showMenu, isMobile } = useGlobalContext();
  const [difference, setDifference] = useState<any>(0);
  var windowHeight = window.innerHeight;

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 70) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.scroll(0, 0);

  useEffect(() => {
    const onPageLoad = () => {
      setDifference(
        document.getElementById("wedderlie-homepage")?.getBoundingClientRect()
          .top
      );
    };

    if (document.readyState === "complete") {
      onPageLoad();
      reveal();
      isMobile && slideLeft();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.readyState]);
  const below = difference - windowHeight;

  function slideLeft() {
    const scrollValue = window.scrollY;
    const slidePic = document.getElementById("wedderlie-homepage");
    const fromZero = scrollValue - (below + windowHeight / 3);
    if (fromZero >= 0) {
      slidePic?.setAttribute(
        "style",
        `width: ${fromZero * 0.04 + 100}%; 
        margin-left: -${fromZero * 0.08}px;`
      );
    } else {
      slidePic?.setAttribute("style", `width: 100%`);
    }
  }
  window.addEventListener("scroll", reveal);
  isMobile && window.addEventListener("scroll", slideLeft);

  return showMenu ? (
    <MobileMenu />
  ) : (
    <OuterContainer>
      {isMobile && <NavBar />}
      <section className="container">
        <section className="banner">
          <div className="header">
            <h3>The best day of our lives</h3>
            <h1>Mr. & Mrs.</h1>
          </div>

          {!isMobile && (
            <nav>
              <Link to="/venue">Venue</Link>
              <Link to="/accommodation">Accommodation</Link>
              <Link to="/ontheday">On the Day</Link>
              <Link to="/rsvp">RSVP</Link>
              <Link to="/honeymoon">Honeymoon</Link>
              <Link to="/request">Song Requests</Link>
              <Link to="/edinburgh">Edinburgh</Link>
              <Link to="/registry">Registry</Link>
              <Link className="last" to="/faq">
                Q&A
              </Link>
            </nav>
          )}
          <img src={us} alt=""></img>
          <Countdown />
        </section>
        <div className="button-container">
          <Link to="/rsvp">
            <Button
              className="button"
              size="large"
              fullWidth
              variant="contained"
              sx={{ borderRadius: "30px" }}
            >
              RSVP
            </Button>
          </Link>
        </div>
      </section>
      <section className="details">
        <div className="info reveal">
          <div className="text">
            <p>8th of July, 2023</p>
            <p>1pm</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="info reveal">
          <div className="text">
            <p>Wedderlie House</p>
            <p>Scotland</p>
          </div>
        </div>
      </section>
      <section className="wedderlie-image">
        <div className="wedderlie-container">
          <img id="wedderlie-homepage" src={wedderlie} alt="wedderlie" />
        </div>
      </section>
      <section className="venue-accom">
        <div className="where venue reverse reveal">
          <h2>Venue</h2>
          <p>
            Wedderlie House is a beautiful country estate outside of Edinburgh,
            the perfect balance between a luxurious manse and a laid-back family
            cabin.
          </p>
        </div>
        <div className="button-container venue-button">
          <Link to="/venue">
            <Button
              className="button"
              size="large"
              fullWidth
              variant="contained"
              sx={{ borderRadius: "30px" }}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </Link>
        </div>
        <div className="where accommodation reveal">
          <h2>Accommodation</h2>
          <p>
            We have arranged accommodation for most of our guests, please let us
            know your preference when you RSVP.
          </p>
        </div>
        <div className="button-container accommodation-button">
          <Link
            to="/accommodation"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <Button
              className="button"
              size="large"
              fullWidth
              variant="contained"
              sx={{ borderRadius: "30px" }}
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </Link>
        </div>
      </section>
      {/* <div className="fade"></div> */}
      <div className="desktop-flex">
        <section className="edinburgh">
          <div className="info">
            <h2 className="reveal first">Just Visiting?</h2>
            <p className="reveal second">
              We've put together a list of our favorite spots and hidden gems,
              with the help of some of some knowledgeable locals.
            </p>
            <div className="button-container reveal third">
              <Link
                to="/edinburgh"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <Button
                  className="button"
                  size="large"
                  fullWidth
                  variant="contained"
                  sx={{ borderRadius: "30px" }}
                >
                  <KeyboardDoubleArrowRightIcon />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="fun">
          <div className="circle">
            <h2 className="reveal still">Don't be shy...</h2>
            <div className="sides">
              <div className="reveal reverse left">
                <p>Vote for our honeymoon</p>
                <div className="button-container">
                  <Link to="/honeymoon">
                    <Button
                      className="button"
                      size="large"
                      fullWidth
                      variant="outlined"
                      style={{
                        color: "#4b3b40",
                        border: "1px solid #4b3b40",
                      }}
                      sx={{
                        borderRadius: "30px",
                      }}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <KeyboardDoubleArrowRightIcon />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="reveal up line"></div>
              <div className="reveal right">
                <p>Request a song</p>
                <div className="button-container">
                  <Link to="/request">
                    <Button
                      className="button"
                      size="large"
                      fullWidth
                      variant="outlined"
                      style={{
                        color: "#4b3b40",
                        border: "1px solid #4b3b40",
                      }}
                      sx={{ borderRadius: "30px" }}
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <KeyboardDoubleArrowRightIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="faq">
        <div className="faq-inside">
          <h2>Any Questions?</h2>
          <div className="button-container">
            <Link to="/faq">
              <Button
                className="button"
                size="large"
                fullWidth
                variant="outlined"
                sx={{ borderRadius: "30px" }}
              >
                Q & A
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="love">
        <img className="reveal" src={hands} alt="love" />
      </section>
      <section className="rsvp">
        <div className="inner-rsvp">
          <div className="little-line"></div>
          <h2>So what are you waiting for?</h2>
          <div className="button-container">
            <Link to="/rsvp">
              <Button
                className="button"
                size="large"
                fullWidth
                variant="contained"
                sx={{ borderRadius: "30px" }}
                style={{
                  color: "#4b3b40",
                  // border: "1px solid hsl(35, 33%, 90%)",
                  background: "hsl(35, 33%, 90%)",
                }}
              >
                RSVP
              </Button>
            </Link>
          </div>
          <div className="little-line"></div>
        </div>
      </section>
    </OuterContainer>
  );
};

export default Home;
const OuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 -150px;
  color: #4b3b40;
  overflow: hidden;
  @media only screen and (min-width: 900px) {
    background-size: 50%;
  }

  .button-container {
    margin: 0 auto;
    width: 50%;

    .button:active {
      background: #70877f;
      position: relative;
      top: 2px;
    }
    a {
      text-decoration: none;
    }
  }

  .container {
    color: #4b3b40;
    margin: 1rem 10% 0;
    border-radius: 5px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 3rem;
    background: hsla(24, 22%, 75%, 0.5);

    .banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-bottom: 1rem;
      .header {
        padding: 1rem 0 0;
        width: 100%;
        text-align: center;

        opacity: 0.8;
      }
      h3 {
        font-family: "Gwendolyn";
        font-size: 1.5rem;
        margin: 1rem auto 0.5rem;
      }
      h1 {
        margin: 0;
        font-size: 3rem;
        letter-spacing: 4px;
        font-weight: 300;
      }
      img {
        margin: 1rem;
        width: 70%;
        opacity: 0.8;
        border-radius: 5px;
      }
      nav {
        width: 100%;
        margin: 20px 0;
        text-align: center;
        white-space: normal;

        > a {
          white-space: nowrap;
          display: inline-block;
          margin: 5px 10px;
          padding-right: 20px;
          text-decoration: none;
          color: #4b3b40;
          border-right: 1px solid #4b3b40;
          font-size: 0.8rem;
        }
        .last {
          border-right: none;
        }
      }
    }
    @media only screen and (min-width: 900px) {
      padding-top: 2rem;
      margin: 5rem auto;
      width: 60%;
      .banner {
        img {
          width: 40%;
        }
      }
      .button-container {
        width: 25%;
      }
    }
  }

  .details {
    width: 80%;
    margin: 3rem 10% 0;
    padding: 2rem 0;
    text-align: center;
    font-size: 2.2rem;
    font-family: "Gwendolyn";
    color: #4b3b40;
    border-top: 2px dotted #4b3b40;
    p {
      margin: 1rem;
    }
    .line {
      width: 30%;
      margin: 10% 35%;
      border-bottom: 1px solid #4b3b40;
    }
    .info {
    }
    .reveal {
      position: relative;
      transform: translateY(100px);
      opacity: 0;
      transition: 1s all ease;
    }
    .reveal.active {
      transform: translateY(0);
      opacity: 1;
    }
    @media screen and (min-width: 900px) {
      width: 70%;
      margin: 5rem auto 2rem;
      display: flex;
      justify-content: center;
      .line {
        width: 0;
        border-right: 1px solid #4b3b40;
        margin: 3%;
      }
    }
  }
  .wedderlie-image {
    width: 100%;
    height: 18rem;
    position: relative;
    margin-bottom: 3rem;
    .wedderlie-container {
      border-radius: 5px;
      width: 80%;
      height: 100%;
      margin: 0 10%;
      overflow: hidden;
      position: absolute;
      #wedderlie-homepage {
        border-radius: 5px;
        width: 100%;
        position: absolute;
        opacity: 0.6;
      }
    }
    @media only screen and (min-width: 600px) {
      width: 80%;
      margin: 0 auto 5rem;
      height: 35rem;
    }
    @media screen and (min-width: 900px) {
      height: 360px;
      width: 100%;

      .wedderlie-container {
        width: 40%;
        max-width: 450px;
        margin: 0 30%;
        #wedderlie-homepage {
          width: 100%;
        }
      }
    }
  }

  .venue-accom {
    height: 540px;
    .where {
      margin: 1rem 5%;
      width: 90%;
      background: hsla(24, 22%, 75%, 0.5);
      padding: 5px;
      box-shadow: 0px 10px 15px 5px hsla(24, 22%, 75%, 0.8);

      h2 {
        font-family: "Gwendolyn";
        font-size: 2.5rem;
        margin: 15px 20px 0;
      }
      p {
        line-height: 1.5rem;
      }
    }
    .venue {
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      border-left: 5px solid #4b3b40;
      p {
        padding: 0 1rem 1rem 5px;
      }
    }
    .venue-button {
      width: 20%;
      margin-top: -2rem;
      margin-right: 40px;
    }
    .accommodation {
      text-align: right;
      margin-left: 5%;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      border-right: 5px solid #4b3b40;
      p {
        text-align: right;
        padding: 0 5px 1rem 1rem;
      }
    }
    .accommodation-button {
      width: 20%;
      margin-top: -2rem;
      margin-left: 30px;
    }
    .reveal {
      position: relative;
      opacity: 0;
      transition: 1s all ease;
      transform: translateX(150px);
    }
    .reverse {
      transform: translateX(-150px);
    }
    .reveal.active {
      transform: translateX(0);
      opacity: 1;
    }
    @media only screen and (min-width: 600px) {
      width: 70%;
      margin: 0 15%;
      .where {
        width: 80%;
      }
      .accommodation {
        margin-left: 20%;
      }
    }

    @media screen and (min-width: 900px) {
      width: 70%;
      margin: 0 15%;
      height: 550px;
      .where {
        width: 60%;
        margin: 3rem 0;
      }

      .accommodation {
        margin-left: 40%;
      }
      .venue-button {
        width: 10%;
        margin-right: 35%;
        margin-top: -4rem;
      }
      .accommodation-button {
        width: 10%;
        margin-left: 35%;
        margin-top: -4rem;
      }
    }
  }
  /* .fade {
    height: 50px;
    width: 100%;
    position: relative;
    z-index: 5;
    background: blue;
  } */
  .desktop-flex {
    @media only screen and (min-width: 900px) {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 600px;
    }
  }
  .edinburgh {
    margin-top: -5px;
    width: 100%;
    height: 25rem;
    background-image: url(${thistle});
    background-size: 100%;
    background-position: bottom 0 right -8rem;
    background-repeat: no-repeat;

    .info {
      padding-left: 10%;
      width: 100%;
      height: 600px;
      text-align: left;
      background: hsla(24, 11%, 91%, 0.3);
      h2 {
        margin-top: 1rem;
        font-size: 2.5rem;
        font-family: "Gwendolyn";
      }
      p {
        width: 65%;
        margin-bottom: 3rem;
        line-height: 1.5rem;
      }
      .button-container {
        margin: 0;
        width: 30%;
      }
    }
    .reveal {
      position: relative;
      opacity: 0;
      transition: 1s all ease;
    }

    .second {
      transition-delay: 0.5s;
    }
    .third {
      transition-delay: 0.7s;
    }
    .reveal.active {
      opacity: 1;
    }
    @media screen and (min-width: 600px) {
      height: 35rem;
      background-size: 60%;
      .info {
        padding-left: 15%;
        padding-top: 10%;
      }
    }
    @media screen and (min-width: 900px) {
      width: 50%;
      height: 100%;
      margin-right: -5%;
      background-size: 60%;
      background-position: bottom right;
      max-height: 600px;
      .info {
        height: 100%;
        p {
          width: 50%;
        }
      }
    }
  }
  .fun {
    .circle {
      width: 86%;
      height: 20rem;
      margin: 15% 7%;
      border: 3px dotted #4b3b40;
      border-radius: 50%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #4b3b40;
      background: hsla(24, 22%, 75%, 0.7);

      h2 {
        font-size: 2.5rem;
        font-family: "Gwendolyn";
        margin-bottom: 1rem;
      }
      .sides {
        width: 100%;
        height: 50%;
        display: flex;
        font-size: 1.2rem;
        text-align: center;
        .left,
        .right {
          width: 50%;
          padding: 0 1rem;
        }
        .line {
          height: 100%;
          border-right: 1px solid #4b3b40;
        }
        .button-container {
          margin: 0 auto 3rem;
          width: 50%;

          .button:active {
            background: #70877f;
            position: relative;
            top: 2px;
          }
          a {
            text-decoration: none;
          }
        }
      }
      .reveal {
        position: relative;
        opacity: 0;
        transition: 1s all ease;
        transform: translateX(150px);
      }
      .reverse {
        transform: translateX(-150px);
      }
      .up {
        transform: translateY(150px);
      }
      .still {
        transform: translateY(10px);
      }
      .reveal.active {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @media only screen and (min-width: 600px) {
      width: 70%;
      height: 30rem;
      margin: 0 15%;
      .circle {
        height: 100%;
        h2 {
          margin: 3rem 0;
        }
        .sides {
          align-items: center;
        }
      }
    }
    @media screen and (min-width: 900px) {
      margin: 0;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;

      .circle {
        padding-top: 2rem;
        width: 400px;
        height: 400px;
        margin: 0 0;
        h2 {
          margin: 2rem 0;
        }
        @media screen and (max-width: 1000px) {
          padding-top: 0;
          width: 300px;
          height: 300px;
          p {
            font-size: 1rem;
          }
        }
        .sides {
          font-size: 1.5rem;
        }
      }
    }
  }

  .faq {
    width: 90%;
    margin: 10% 5%;
    border-radius: 5px;
    text-align: center;
    background: url(${concrete});
    background-size: cover;
    .faq-inside {
      padding: 2rem 2rem 3rem;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    h2 {
      font-family: "Gwendolyn";
      font-size: 2.5rem;
      margin-top: 1rem;
    }
    @media screen and (min-width: 600px) {
      width: 70%;
      margin: 7rem 15% 2rem;
      height: 20rem;
      .faq-inside {
        padding: 3rem;
        h2 {
          margin: 2rem;
        }
      }
    }
    @media screen and (min-width: 900px) {
      width: 50%;
      margin: 100px 25%;
      .faq-inside {
        h2 {
          margin: 3rem;
        }
      }

      .button-container {
        width: 30%;
      }
    }
  }
  .love {
    width: 100%;
    margin: -50px 0;
    img {
      width: 70%;
      margin: 0 15%;
    }
    .reveal {
      position: relative;
      opacity: 0;
      transition: 1.5s all ease;
      transition-delay: 0.5s;
    }
    .reveal.active {
      opacity: 1;
    }
    @media screen and (min-width: 900px) {
      margin: -100px 0;
      img {
        width: 30%;
        margin: 0 35%;
      }
    }
  }
  .rsvp {
    width: 100%;
    height: 500px;
    text-align: center;
    background-image: url(${backgroundUpside});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 100px;
    color: hsla(35, 33%, 90%);
    .inner-rsvp {
      padding: 2rem;
      border-radius: 5px;
      width: 80%;
      margin: 10%;
      background: hsla(342, 12%, 26%, 0.7);

      h2 {
        font-family: "Gwendolyn";
        font-size: 2rem;
      }
      img {
        margin: -30px 0 -50px;
        width: 60%;
      }
      .little-line {
        margin: 0 auto;
        width: 10%;
        height: 0;
        border-bottom: 1px solid hsl(35, 33%, 90%);
      }
    }
    @media screen and (min-width: 600px) {
      height: 800px;
      .inner-rsvp {
        padding-top: 5rem;
        height: 20rem;
        width: 70%;
        margin: 10% 15%;
      }
    }
    @media screen and (min-width: 900px) {
      background-size: 50%;
      background-position: right top;
      .inner-rsvp {
        width: 50%;
        margin: 10% 25%;
      }
      .button-container {
        width: 30%;
      }
    }
  }
`;
