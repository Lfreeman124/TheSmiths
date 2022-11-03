import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import car1 from "../images/car1.png";
import beach from "../images/beach.jpg";

const Honeymoon: React.FC = () => {
  const [currentVote, setCurrentVote] = useState("");
  const [votes, setVotes] = useState({
    bali: 0,
    road: 0,
  });

  const voteNow = () => {
    if (currentVote === "bali") {
      setVotes({ ...votes, bali: votes.bali + 1 });
    } else if (currentVote === "road") {
      setVotes({ ...votes, road: votes.road + 1 });
    }
    setCurrentVote("");
  };

  return (
    <Container>
      <h2>Where should we go on our honeymoon?</h2>
      <div className="options-container">
        <div className="options">
          <div id="road" className="option-container">
            <div
              style={{
                boxShadow:
                  currentVote === "road" ? "0px 0px 10px 10px #f5b617" : "none",
              }}
              className="circle"
              onClick={() => setCurrentVote("road")}
            >
              <img src={car1} alt="car" />
            </div>
            <div className="circle-label">Road Trip</div>
          </div>
          <div id="bali" className="option-container">
            <div
              style={{
                boxShadow:
                  currentVote === "bali" ? "0px 0px 10px 10px #f5b617" : "none",
              }}
              className="circle"
              onClick={() => setCurrentVote("bali")}
            >
              <img src={beach} alt="beach" />
            </div>
            <div className="circle-label">Bali</div>
          </div>
        </div>
        <div className="button-container">
          <Button fullWidth variant="contained" onClick={voteNow}>
            Vote!
          </Button>
        </div>
      </div>
      <div className="results-container">
        <div className="results-label">Road Trip: {votes.road} </div>
        <div className="results-bar">
          <div
            style={{ width: `${votes.road * 2}%` }}
            className="results-filling"
          ></div>
        </div>
        <div className="results-label">Bali: {votes.bali}</div>
        <div className="results-bar">
          <div
            style={{ width: `${votes.bali * 2}%` }}
            className="results-filling"
          ></div>
        </div>
      </div>
    </Container>
  );
};

export default Honeymoon;

const Container = styled.div`
  h2 {
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin: 2rem 0;
    background: #c0694b;
    color: white;
  }
  .options-container {
    .options {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .option-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        .circle {
          border: 2px solid black;
          height: 10rem;
          width: 10rem;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
      }
      #road {
        img {
          margin-top: -38%;
          width: 100%;
        }
      }
      #bali {
        img {
          margin-left: -50%;
          height: 100%;
        }
      }
    }
    .button-container {
      width: 50%;
      margin: 2rem auto;
    }
  }
  .results-container {
    padding: 0 1rem;
    margin-bottom: 2rem;
    .results-label {
      margin: 1rem 0 0.5rem;
    }
    .results-bar {
      border: 1px solid black;
      width: 100%;
      height: 2rem;
      .results-filling {
        height: 100%;
        background: #5c8171;
      }
    }
  }
`;
