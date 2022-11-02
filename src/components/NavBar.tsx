import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    setIsMobile(matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const navLinks = (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/venue">Venue</Link>
      <Link to="/accomodation">Accomodation</Link>
      <Link to="/ontheday">On the day</Link>
      <Link to="/rsvp">RSVP</Link>
      <Link to="/registry">Registry</Link>
      <Link to="/edinburgh">Edinburgh</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  );

  return (
    <Container>
      {isMobile ? (
        <div className="mobile-menu">
          <div
            className="hamburger"
            style={{ background: showMobileMenu ? "#eccdac" : "white" }}
          >
            {showMobileMenu ? (
              <CloseIcon onClick={toggleMobileMenu} />
            ) : (
              <MenuIcon onClick={toggleMobileMenu} />
            )}
          </div>
          <StyledMenu
            style={{
              display: showMobileMenu ? "block" : "none",
              width: "calc(100% - 1rem)",
            }}
          >
            {navLinks}
          </StyledMenu>
        </div>
      ) : (
        <React.Fragment>{navLinks}</React.Fragment>
      )}
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 100%;

  .mobile-menu {
    width: 100%;
  }
  .hamburger {
    text-align: right;
    height: 3rem;
    * {
      margin-right: 1rem;
      margin-top: 0.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
  }
`;

const StyledMenu = styled.div`
  background: #eccdac;
  /* width: 100%; */
  height: 100vh;
  position: absolute;
  left: 0;
  z-index: 99;
  left: 0.5rem;
  .links {
    display: flex;
    flex-direction: column;
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      text-decoration: none;
      width: 100%;
      height: 4rem;
      font-size: 1.5rem;
    }
  }
`;
