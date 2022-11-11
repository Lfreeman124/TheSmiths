import React from "react";
import us from "../images/us.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";
import { Button } from "@mui/material";
import background from "../images/background.jpg";
import star from "../images/star.svg";
import wedderlie from "../images/wedderlie3.png";
import thistle from "../images/thistle1.jpg";

const Home: React.FC = () => {
  const { showMenu, isMobile } = useGlobalContext();

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function slideLeft() {
    const scrollValue = window.scrollY;
    var windowHeight = window.innerHeight;
    const slidePic = document.getElementById("wedderlie");
    var elementTop = slidePic?.getBoundingClientRect().top;
    if (elementTop && elementTop < windowHeight) {
      slidePic?.setAttribute("style", `left: ${scrollValue * 0.05 - 80}px`);
    } else {
      slidePic?.setAttribute("style", `left: -50px`);
    }
  }
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", slideLeft);
  reveal();
  slideLeft();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <OuterContainer>
      {isMobile && <NavBar />}
      <section className="container">
        <section className="banner">
          <div className="header">
            <h3>The best day of our lives</h3>
            <h2>-- Mr & Mrs --</h2>
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
                FAQ
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
        <img src={star} alt="" />
        <div className="info reveal">
          <div className="text">
            <p>Wedderlie House</p>
            <p>Scotland</p>
          </div>
        </div>
      </section>
      <section className="wedderlie-container">
        <img id="wedderlie" src={wedderlie} alt="wedderlie" />
      </section>
      <section className="venue-accom">
        <div className="where venue reverse reveal">
          <h2>Venue</h2>
          <p>
            Wedderlie House is a beautiful country estate outside of Edinburgh,
            the perfect balance between a luxurious estate and a laid-back
            family cabin.
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
              More
            </Button>
          </Link>
        </div>
        <div className="where accommodation reveal">
          <h2>Accommodation</h2>
          <p>
            We have arranged accommodation for most of our guests, and you can
            let us know your preference when you RSVP.
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
              More
            </Button>
          </Link>
        </div>
      </section>
      <div className="fade"></div>
      <section className="edinburgh">
        <div className="info">
          <h2>Just Visiting?</h2>
          <p>Check out our Edinburgh and Scotland tips!</p>
          <div className="button-container">
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
                Yes Please!
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="fun">
        <h2>Don't be shy...</h2>
        <div className="sides">
          <div className="left">
            <p>Vote for our honeymoon</p>
            <div className="button-container">
              <Link to="/honeymoon">
                <Button
                  className="button"
                  size="large"
                  fullWidth
                  variant="outlined"
                  style={{
                    color: "hsla(35, 33%, 90%)",
                    border: "1px solid hsla(35, 33%, 90%)",
                  }}
                  sx={{
                    borderRadius: "30px",
                  }}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  OK!
                </Button>
              </Link>
            </div>
          </div>
          <div className="right">
            <p>Request a song</p>
            <div className="button-container">
              <Link to="/request">
                <Button
                  className="button"
                  size="large"
                  fullWidth
                  variant="outlined"
                  style={{
                    color: "hsla(35, 33%, 90%)",
                    border: "1px solid hsla(35, 33%, 90%)",
                  }}
                  sx={{ borderRadius: "30px" }}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  OK!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </OuterContainer>
  );
};

export default Home;
const OuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #d8d6da;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  color: #4b3b40;
  @media only screen and (min-width: 600px) {
    background-size: 45%;
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

  .container {
    margin: 1rem 10% 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    background: hsla(35, 33%, 90%, 0.8);

    @media only screen and (min-width: 600px) {
      padding-top: 2rem;
      margin: 0 auto;
      min-height: 100vh;
    }
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .header {
      padding: 1rem 0 0;
      width: 100%;
      text-align: center;

      opacity: 0.8;
    }
    h3 {
      font-family: "Gwendolyn";
    }
    h2 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 200;
    }
    img {
      margin: 1rem;
      width: 60%;
    }
    nav {
      width: 100%;
      margin: 20px;
      text-align: center;
      > a {
        margin: 10px;
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
  .details {
    padding: 3rem 0;
    text-align: center;
    font-size: 1.5rem;
    img {
      width: 20px;
    }
    .info {
    }
    .reveal {
      position: relative;
      transform: translateY(150px);
      opacity: 0;
      transition: 1s all ease;
    }
    .reveal.active {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .wedderlie-container {
    width: 100%;
    position: relative;
    height: 400px;
    overflow: hidden;
    #wedderlie {
      position: absolute;
      top: 0;
      left: 0;
      width: 120%;
      opacity: 0.5;
    }
  }
  .venue-accom {
    margin-top: 4rem;
    height: 600px;
    .where {
      margin: 1rem 0;
      width: 90%;
      background: hsla(35, 33%, 90%, 0.8);
      padding: 5px;
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
      p {
        padding: 0 1rem 1rem 5px;
      }
    }
    .venue-button {
      width: 40%;
      margin-top: -2rem;
      margin-right: 40px;
    }
    .accommodation {
      text-align: right;
      margin-left: 10%;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      p {
        text-align: right;
        padding: 0 5px 1rem 1rem;
      }
    }
    .accommodation-button {
      width: 40%;
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
  }
  .fade {
    height: 50px;
    width: 100%;
    position: relative;
    z-index: 5;
    background: linear-gradient(#d8d6da, #e1e3de);
  }
  .edinburgh {
    margin-top: -5px;
    width: 100%;
    height: 600px;
    background-image: url(${thistle});
    background-size: cover;
    background-repeat: no-repeat;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 600px;
      text-align: center;
      background: hsla(75, 5%, 85%, 0.7);
      h2 {
        font-size: 4rem;
        font-family: "Gwendolyn";
      }
      p {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }

  .fun {
    width: 100%;
    height: 400px;
    background: #4b3b40;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsla(35, 33%, 90%);
    h2 {
      font-size: 3rem;
      font-family: "Gwendolyn";
    }
    .sides {
      width: 100%;
      display: flex;
      font-size: 1.7rem;
      text-align: center;
      .left,
      .right {
        width: 50%;
        padding: 0.5rem;
      }
      .left {
        border-right: 1px solid hsla(35, 33%, 90%);
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
  }
`;
