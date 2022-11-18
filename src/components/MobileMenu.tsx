import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../State";
import MobileNavBar from "./NavBar";

const NavBar: React.FC = () => {
  const { showMenu, setShowMenu, isMobile } = useGlobalContext();

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
    <div>{navLinks}</div>
  );
};

export default NavBar;

const StyledMenu = styled.div`
  background: hsl(35, 33%, 90%);
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
      color: #4b3b40;
      text-decoration: none;
      width: 100%;
      height: 3rem;
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;
