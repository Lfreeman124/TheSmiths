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
    <React.Fragment>
      <NavBar />
      <Container>
        <h1>Request a Song</h1>
        <RequestForm onUpdate={onUpdate} />
        <div className="flowers-container">
          <img src={flowers} alt="flowers" />
        </div>
        <RequestsList hasBeenUpdated={hasBeenUpdated} onUpdate={onUpdate} />
      </Container>
    </React.Fragment>
  );
};

export default Requests;

const Container = styled.div`
  width: 100%;
  padding: 0 2rem 2rem;
  h1 {
    width: 100%;
    text-align: center;
    font-family: "Gwendolyn";
    background: ${colors.beige};
    color: ${colors.red};
    padding: 1rem;
    border-radius: 10px;
  }
  .flowers-container {
    width: 100%;
    display: flex;
    background: hsl(270, 10%, 25%);
    margin-bottom: 2rem;
    img {
      width: 100%;
      opacity: 0.8;
    }
  }

  @media only screen and (min-width: 600px) {
    padding: 2rem 20% 4rem;
  }
`;
