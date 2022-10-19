import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/venue">Venue</Link>
      <Link to="/ontheday">On the day</Link>
      <Link to="/rsvp">RSVP</Link>
      <Link to="/registry">Registry</Link>
      <Link to="/edinburgh">Edinburgh</Link>
      <Link to="/faq">FAQ</Link>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  * {
    margin: 10px;
  }
`;
