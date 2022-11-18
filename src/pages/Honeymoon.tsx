import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import car from "../images/car.jpg";
import beach from "../images/beach-min.png";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../State";

const colors = {
  red: "#4b3b40",
  beige: "hsl(35, 33%, 90%)",
  grey: "#d8d6da",
  green: "#70877f",
};

const Honeymoon: React.FC = () => {
  const [currentVote, setCurrentVote] = useState("");
  const [votes, setVotes] = useState({ road: 0, bali: 0 });
  const [loading, setLoading] = useState(true);
  const { showMenu } = useGlobalContext();

  const getVotes = async () => {
    const data = collection(db, "honeymoon");
    const snapshot = await getDocs(data);
    const votesData = snapshot.docs.map((doc) => doc.data());
    setVotes({ road: votesData[0].road, bali: votesData[0].bali });
    setLoading(false);
  };

  useEffect(() => {
    getVotes();
  }, []);

  const voteNow = async () => {
    if (currentVote !== "") {
      const change = doc(db, "honeymoon", "honeymoon");
      await updateDoc(change, { [currentVote]: increment(1) });
      setCurrentVote("");
      getVotes();
    }
  };

  return loading ? (
    <></>
  ) : showMenu ? (
    <MobileMenu />
  ) : (
    <React.Fragment>
      <NavBar />

      <Container>
        <div className="green-line"></div>

        <div className="inner-window">
          <h2>Where should we go on our honeymoon?</h2>
          <div className="options-container">
            <div className="options">
              <div id="road" className="option-container">
                <div
                  style={{
                    boxShadow:
                      currentVote === "road"
                        ? "0px 0px 10px 10px #d08d4e"
                        : "none",
                  }}
                  className="circle"
                  onClick={() => setCurrentVote("road")}
                >
                  <img src={car} alt="car" />
                </div>
                <div className="circle-label">Road Trip</div>
              </div>
              <div id="bali" className="option-container">
                <div
                  style={{
                    boxShadow:
                      currentVote === "bali"
                        ? "0px 0px 10px 10px #d08d4e"
                        : "none",
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
              <Button
                className="vote-button"
                fullWidth
                variant="contained"
                onClick={voteNow}
              >
                Vote
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
        </div>
        <div className="green-line"></div>
      </Container>
    </React.Fragment>
  );
};

export default Honeymoon;

const Container = styled.div`
  width: 100%;
  .green-line {
    width: 90%;
    margin: 0 5% 1rem;
    border-top: 5px solid #70877f;
  }
  .inner-window {
    width: 90%;
    margin: 0 5% 1rem;
    border-radius: 5px;
    background: hsla(24, 22%, 65%, 0.3);
  }

  h2 {
    font-family: "Gwendolyn";
    padding: 1rem;
    width: 90%;
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 auto;
    text-align: center;
    /* background: hsla(24, 22%, 65%, 0.3); */
    color: ${colors.red};
    border-radius: 10px;
  }
  .options-container {
    .options {
      width: 100%;
      display: flex;
      justify-content: center;
      .option-container {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .circle {
          border: 2px solid black;
          height: 9rem;
          width: 9rem;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
      }
      #road {
        img {
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
      width: 40%;
      margin: 1rem auto 2rem;
      .vote-button:active {
        background: #70877f;
        position: relative;
        top: 2px;
      }
    }
  }
  .results-container {
    padding: 0 1rem 2rem;
    .results-label {
      margin: 1rem 0 0.5rem;
    }
    .results-bar {
      border: 1px solid black;
      border-radius: 20px;
      width: 100%;
      height: 2rem;
      .results-filling {
        height: 100%;
        background: #70877f;
        border-radius: 20px;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    padding: 2rem 20%;
    h2 {
      width: 60%;
      font-size: 2rem;
    }
  }
`;
