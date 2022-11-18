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
    <Container>
      <NavBar />
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
  );
};

export default Requests;

const Container = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  .green-line {
    width: 90%;
    margin: 0 5%;
    border-top: 5px solid #70877f;
  }
  .inner-window {
    width: 90%;
    margin: 0 5%;
    padding: 0 2rem 1rem;
    border-radius: 5px;
    background: hsla(24, 22%, 65%, 0.3);

    h1 {
      width: 100%;
      text-align: center;
      font-size: 2.3rem;
      font-family: "Gwendolyn";
      color: ${colors.red};
      padding: 2rem 1rem 1rem;
      border-radius: 10px;
      margin-bottom: 0;
    }
  }
  .flowers-container {
    width: 80%;
    display: flex;
    background: hsla(34, 15%, 56%);
    margin: 1rem 10%;
    img {
      width: 100%;
      opacity: 0.8;
    }
  }

  @media only screen and (min-width: 600px) {
    padding: 2rem 20% 4rem;
  }
`;
