import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import MobileNavBar from "../components/MobileNavBar";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <Container>
      <MobileNavBar />
      <header>
        <h1>Welcome to Edinburgh!</h1>
        <h2>Graeme and Lauren recommend...</h2>
        <h2>James and Laura recommend...</h2>
        <h2>Christopher and Julie recommend...</h2>
        <h2>Jonathan and Sinead recommend...</h2>
      </header>
    </Container>
  );
};

export default OnTheDay;

const Container = styled.div``;
