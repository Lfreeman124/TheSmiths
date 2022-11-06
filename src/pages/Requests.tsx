import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import RequestsList from "../components/RequestsList";
import RequestForm from "../components/RequestForm";

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
        <h1>Request a Song!</h1>
        <RequestForm onUpdate={onUpdate} />
        <RequestsList hasBeenUpdated={hasBeenUpdated} onUpdate={onUpdate} />
      </Container>
    </React.Fragment>
  );
};

export default Requests;

const Container = styled.div`
  padding-top: 2rem;
  h1 {
    width: 100%;
    text-align: center;
    font-family: "Gwendolyn";
  }
  width: 100%;
`;
