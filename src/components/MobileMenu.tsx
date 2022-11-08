import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useGlobalContext } from "../State";
import MobileNavBar from "./NavBar";

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { showMenu, setShowMenu } = useGlobalContext();
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    setIsMobile(matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMobileMenu = () => {
    setShowMenu((prev: any) => !prev);
  };

  const pages = [
    { link: "/", text: "Home" },
    { link: "/venue", text: "Venue" },
    { link: "/accommodation", text: "Accommodation" },
    { link: "/ontheday", text: "On the day" },
    { link: "/rsvp", text: "RSVP" },
    { link: "/registry", text: "Registry" },
    { link: "/honeymoon", text: "Honeymoon" },
    { link: "/request", text: "Song Requests" },
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
    showMenu ? (
      <StyledMenu>
        <div className="icon">
          <CloseIcon onClick={toggleMobileMenu} />
        </div>
        {navLinks}
      </StyledMenu>
    ) : (
      <MobileNavBar />
    )
  ) : (
    <Container>{navLinks}</Container>
  );
};

export default NavBar;

const Container = styled.div``;

const StyledMenu = styled.div`
  background: #e0c6b3;
  min-height: 100vh;
  width: 100%;
  z-index: 99;
  .icon {
    width: 100%;
    text-align: right;
    height: 3rem;
    * {
      margin-right: 1rem;
      margin-top: 0.5rem;
    }
  }
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
      height: 3rem;
      font-size: 1rem;
    }
  }
`;
