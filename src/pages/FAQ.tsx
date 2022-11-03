import React from "react";
import NavBar from "../components/NavBar";
import Honeymoon from "../components/Honeymoon";

const FAQ: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1>FAQs</h1>
      <h2>Accommodation</h2>
      <h2>Transportation</h2>
      <h2>Dress Code</h2>
      <h2>Menu</h2>
      <h2>Are children invited?</h2>
      <h2>What's the plan for the rest of the weekend?</h2>
      <h2>Hair and Makeup</h2>
      <Honeymoon />
    </div>
  );
};

export default FAQ;
