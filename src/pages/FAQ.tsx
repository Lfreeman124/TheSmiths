import React from "react";
import MobileMenu from "../components/MobileMenu";
import MobileNavBar from "../components/MobileNavBar";
import { useGlobalContext } from "../State";

const FAQ: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <div>
      <MobileNavBar />
      <h1>FAQs</h1>
      <h2>Accommodation</h2>
      <h2>Transportation</h2>
      <h2>Dress Code</h2>
      <h2>Menu</h2>
      <h2>Are children invited?</h2>
      <h2>What's the plan for the rest of the weekend?</h2>
      <h2>Hair and Makeup</h2>
    </div>
  );
};

export default FAQ;
