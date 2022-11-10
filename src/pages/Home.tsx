import React from "react";
import us from "../images/us.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Countdown from "../components/Countdown";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";
import { Button } from "@mui/material";
import background from "../images/background.jpg";
import star from "../images/star.svg";
import wedderlie from "../images/wedderlie3.png";

const Home: React.FC = () => {
  const { showMenu, isMobile } = useGlobalContext();

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;

      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
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
    console.log(elementTop, windowHeight, scrollValue);
    if (elementTop && elementTop < windowHeight) {
      slidePic?.setAttribute("style", `left: ${scrollValue * 0.1 - 200}px`);
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
          {/* <Countdown /> */}
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
      <section className="bottom">More Stuff</section>
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
  @media only screen and (min-width: 600px) {
    background-size: 45%;
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
    height: 500px;
    #wedderlie {
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .bottom {
    height: 700px;
  }
`;
