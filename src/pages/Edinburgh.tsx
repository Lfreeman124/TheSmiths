import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const OnTheDay: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <header>
        <h1>Welcome to Edinburgh!</h1>
      </header>
    </Container>
  );
};

export default OnTheDay;

const Container = styled.div``;
