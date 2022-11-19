import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import MobileNavBar from "../components/NavBar";
import { useGlobalContext } from "../State";
import flowers from "../images/flowers5.png";
import { questions } from "../components/Questions";

const FAQ: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <Container>
      <MobileNavBar />
      <div className="green-line"></div>

      <div className="header">
        <h1>Questions and Answers</h1>
        <p>If you have any other questions or concerns, please reach out.</p>
      </div>
      <div className="flowers-container">
        <img src={flowers} alt="flowers" />
      </div>
      <div className="green-line"></div>
      {questions.map((each: any, index: any) => {
        return (
          <div className="main" key={index}>
            <h4>{each.question}</h4>
            <p>{each.answer}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default FAQ;

const Container = styled.div`
  width: 100%;
  color: #4b3b40;
  text-decoration: none;
  padding: 0 1rem 3rem;
  .green-line {
    width: 100%;
    margin: 1rem 0;
    border-top: 5px solid #70877f;
  }
  .header {
    width: 90%;
    margin: 0 5%;
    padding: 1rem 2rem;
    background: hsla(24, 22%, 65%, 0.3);
    border-radius: 10px;
    h1 {
      font-family: "Gwendolyn";
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    p {
      line-height: 1.5rem;
    }
  }
  .flowers-container {
    width: 80%;
    display: flex;
    background: hsla(34, 15%, 54%);
    margin: 1rem 10%;
    img {
      width: 100%;
      opacity: 0.8;
    }
  }
  .main {
    width: 90%;
    margin: 0 5%;
  }
`;
