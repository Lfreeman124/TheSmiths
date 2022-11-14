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
import wedderlie from "../images/wedderlie3.png";
import thistle from "../images/thistle1.jpg";
import concrete from "../images/concrete-min.jpg";
import hands from "../images/hands.png";
import backgroundUpside from "../images/background-upside.jpg";
// import dancing from "../images/dancing2.webp";
// import dancing2 from "../images/dancing.webp";
const Home: React.FC = () => {
  const { showMenu, isMobile } = useGlobalContext();

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 150) {
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
              variant="outlined"
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
          <img id="wedderlie" src={wedderlie} alt="wedderlie" />
        </div>
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
          <h2 className="reveal first">Just Visiting?</h2>
          <p className="reveal second">
            Check out our Edinburgh and Scotland tips!
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
                Yes Please!
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="fun">
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
      <section className="faq">
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
              FAQ
            </Button>
          </Link>
        </div>
      </section>
      {/* <section className="dancing">
        <img src={dancing} alt="dancing" />
      </section> */}
      <section className="rsvp">
        <div className="inner-rsvp">
          <img className="reveal" src={hands} alt="love" />
          <h2>So what are you waiting for?</h2>
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
  overflow: hidden;
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
    border-radius: 20px;
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
    font-family: "Gwendolyn";
    .line {
      width: 30%;
      margin-left: 35%;
      border-bottom: 1px solid #4b3b40;
    }
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
  .wedderlie-image {
    width: 100%;
    height: 300px;
    position: relative;
    margin-bottom: 5rem;
    .border {
      width: 100%;
      z-index: 5;
    }
    .wedderlie-container {
      border-radius: 20px;
      width: 80%;
      height: 100%;
      margin: 0 10%;
      overflow: hidden;
      position: absolute;
      #wedderlie {
        position: absolute;
        margin-left: 10px;
        width: 130%;
        opacity: 0.6;
      }
    }
  }

  .venue-accom {
    height: 550px;
    .where {
      margin: 1rem 0;
      width: 90%;
      background: hsla(35, 33%, 90%, 0.7);
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
      box-shadow: 0px 0px 10px 10px hsla(35, 33%, 90%, 0.7);
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
      box-shadow: 0px 0px 10px 10px hsla(35, 33%, 90%, 0.7);
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
    background: linear-gradient(#d8d6da, #d9d8da);
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
      background: hsla(250, 5%, 81%, 0.7);
      h2 {
        font-size: 3rem;
        font-family: "Gwendolyn";
      }
      p {
        padding: 0 10%;
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 2rem;
      }
    }
    .reveal {
      position: relative;
      opacity: 0;
      transition: 1s all ease;
    }
    .first {
      transition-delay: 0.3s;
    }
    .second {
      transition-delay: 0.9s;
    }
    .third {
      transition-delay: 1s;
    }
    .reveal.active {
      opacity: 1;
    }
  }

  .fun {
    width: 80%;
    margin: 10%;
    border-radius: 20px;
    height: 350px;
    background: #4b3b40;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsla(35, 33%, 90%);
    box-shadow: 0px 0px 60px 90px #d8d6da;

    h2 {
      font-size: 2.5rem;
      font-family: "Gwendolyn";
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
        padding: 1rem;
      }
      .line {
        height: 100%;
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
  .faq {
    width: 80%;
    margin: 10%;
    border-radius: 20px;
    text-align: center;
    padding: 2rem;
    background: url(${concrete});
    background-size: cover;
    h2 {
      font-family: "Gwendolyn";
      font-size: 2.5rem;
    }
  }
  .dancing {
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: flex;
    background: hsla(230, 4%, 53%);
    margin: -5px 0;

    img {
      height: 100%;
      opacity: 0.7;
    }
  }
  .rsvp {
    width: 100%;
    height: 500px;
    text-align: center;
    border-radius: 20px;
    background-image: url(${backgroundUpside});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    .inner-rsvp {
      padding: 2rem;
      border-radius: 20px;
      width: 80%;
      margin: 10%;
      background: hsla(35, 33%, 90%, 0.8);

      h2 {
        font-family: "Gwendolyn";
        font-size: 2rem;
      }
      img {
        margin: -30px 0 -50px;
        width: 60%;
      }
    }

    .reveal {
      position: relative;
      opacity: 0;
      transition: 1.5s all ease;
      transition-delay: 1s;
    }
    .reveal.active {
      opacity: 1;
    }
  }
`;
