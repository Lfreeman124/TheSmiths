import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import RequestsList from "../components/RequestsList";
import RequestForm from "../components/RequestForm";
import flowers from "../images/flowers.png";

const colors = {
  red: "#4b3b40",
  beige: "hsl(35, 33%, 90%)",
  grey: "#d8d6da",
  green: "#70877f",
};

const Requests: React.FC = () => {
  const { showMenu } = useGlobalContext();
  const [hasBeenUpdated, setHasBeenUpdated] = useState(true);

  const onUpdate = (bool: boolean) => {
    setHasBeenUpdated(bool);
  };

  return showMenu ? (
    <MobileMenu />
  ) : (
    <div>
      <NavBar />

      <Container>
        <div className="green-line"></div>
        <div className="inner-window">
          <h1>Request a Song</h1>
          <RequestForm onUpdate={onUpdate} />
        </div>
        <div className="flowers-container">
          <img src={flowers} alt="flowers" />
        </div>
        <div className="green-line"></div>

        <RequestsList hasBeenUpdated={hasBeenUpdated} onUpdate={onUpdate} />
      </Container>
    </div>
  );
};

export default Requests;

const Container = styled.div`
  width: 100%;
  padding: 0 1rem 3rem;
  .green-line {
    width: 100%;
    margin: 1rem 0;
    border-top: 5px solid #70877f;
  }
  .inner-window {
    width: 90%;
    margin: 2rem 5% 0;
    padding: 0 2rem 1rem;
    border-radius: 5px;
    background: hsla(24, 22%, 65%, 0.3);

    h1 {
      width: 100%;
      text-align: center;
      font-size: 2rem;
      font-family: "Gwendolyn";
      color: ${colors.red};
      padding: 2rem 1rem 1rem;
      border-radius: 10px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  .flowers-container {
    width: 80%;
    display: flex;
    background: hsla(34, 15%, 54%);
    margin: 1rem 10%;
    img {
      width: 100%;
      opacity: 0.8;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 70%;
    margin: 0 15%;
  }
`;
