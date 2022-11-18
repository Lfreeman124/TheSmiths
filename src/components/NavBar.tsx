import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../State";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const { setShowMenu, isMobile } = useGlobalContext();

  const toggleMobileMenu = () => {
    setShowMenu((prev: any) => !prev);
  };
  return isMobile ? (
    <MobileContainer>
      <div className="icon">
        <MenuIcon onClick={toggleMobileMenu} />
      </div>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/venue">Venue</Link>
        <Link to="/accommodation">Accommodation</Link>
        <Link to="/ontheday">On the Day</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/honeymoon">Honeymoon</Link>
        <Link to="/request">Song Requests</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/edinburgh">Edinburgh</Link>
        <Link className="last" to="/faq">
          FAQ
        </Link>
      </nav>
    </DesktopContainer>
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
`;

const DesktopContainer = styled.div`
  display: flex;
  justify-content: right;
  nav {
    margin: 20px;
    > a {
      font-size: 0.7rem;
      margin: 5px;
      padding-right: 10px;
      text-decoration: none;
      color: #4b3b40;
      border-right: 1px solid #4b3b40;
    }
    .last {
      border-right: none;
      padding-right: 0;
    }
  }
`;
