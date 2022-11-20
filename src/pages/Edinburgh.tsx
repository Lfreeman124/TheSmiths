import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";
import NavBar from "../components/NavBar";
import { recommendations } from "../components/Recommendations";
import flowers from "../images/flowers4.png";

const OnTheDay: React.FC = () => {
  const { showMenu } = useGlobalContext();

  return showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <NavBar />
      <Container>
        <div className="green-line"></div>

        <header>
          <h1>Welcome to Edinburgh!</h1>
          <p>
            We want you to see the best of Edinburgh, so we've put together a
            wee list of locals' tips. If you are thinking of wandering farther
            outside of the city, we can also recommend good hikes, castles,
            borders towns, distilleries, scenic drives, and pubs.
          </p>
        </header>
        <div className="flowers-container">
          <img src={flowers} alt="flowers" />
        </div>
        <div className="green-line"></div>

        {recommendations.map((each: any, index: any) => {
          return (
            <div className="list" key={index}>
              <h4>{each.title}</h4>
              {each.data.map((every: any, index: any) => {
                return (
                  <div className="items" key={index}>
                    <p className="name">{every.name}</p>
                    <p className="type">{every.type}</p>
                  </div>
                );
              })}
              <div className="green-line longer"></div>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default OnTheDay;

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
  .longer {
    width: 110%;
    margin: 1rem -5%;
  }
  header {
    width: 90%;
    margin: 2rem 5% 0;
    padding: 1rem 2rem;
    background: hsla(24, 22%, 65%, 0.3);
    border-radius: 10px;
    text-align: center;

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
  .list {
    width: 90%;
    margin: 0 5%;

    .items {
      display: flex;
      justify-content: space-between;
      .name {
        font-weight: 400;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    width: 70%;
    margin: 0 15%;
    .list {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
