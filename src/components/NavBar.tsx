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

  const pages = [
    { link: "/", text: "Home" },
    { link: "/venue", text: "Venue" },
    { link: "/accommodation", text: "Accommodation" },
    { link: "/ontheday", text: "On the day" },
    { link: "/rsvp", text: "RSVP" },
    { link: "/registry", text: "Registry" },
    { link: "/edinburgh", text: "Edinburgh" },
    { link: "/faq", text: "FAQ" },
  ];

  const navLinks = (
    <div className="links">
      {pages.map((each: any, index) => {
        return (
          <Link key={index} onClick={toggleMobileMenu} to={each.link}>
            {each.text}
          </Link>
        );
      })}
    </div>
  );

  return isMobile ? (
    <MobileContainer>
      {showMobileMenu ? (
        <StyledMenu>
          <div className="icon">
            <CloseIcon onClick={toggleMobileMenu} />
          </div>
          {navLinks}
        </StyledMenu>
      ) : (
        <div className="icon">
          <MenuIcon onClick={toggleMobileMenu} />
        </div>
      )}
    </MobileContainer>
  ) : (
    <Container>{navLinks}</Container>
  );
};

export default NavBar;

const MobileContainer = styled.div`
  width: 100%;
  .icon {
    width: 100%;
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

const Container = styled.div``;

const StyledMenu = styled.div`
  background: #eccdac;
  height: 100vh;
  width: 100%;
  /* position: absolute;
  left: 0; */
  z-index: 99;
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
