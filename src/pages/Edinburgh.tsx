import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const OnTheDay: React.FC = () => {
  return (
    <Container>
      <NavBar />
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
