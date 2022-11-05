import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../State";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNavBar: React.FC = () => {
  const { setShowMenu } = useGlobalContext();

  const toggleMobileMenu = () => {
    setShowMenu((prev: any) => !prev);
  };
  return (
    <MobileContainer>
      <div className="icon">
        <MenuIcon onClick={toggleMobileMenu} />
      </div>
    </MobileContainer>
  );
};
export default MobileNavBar;

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
