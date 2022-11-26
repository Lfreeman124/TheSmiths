import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface Props {
  onUpdate: (bool: boolean) => void;
}

const RequestForm: React.FC<Props> = (props: any) => {
  const initialState = { song: "", artist: "", created: Timestamp.now() };
  const [song, setSong] = useState(initialState);

  const handleInputRequest = (e: any) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };
  const sendRequest = async () => {
    await addDoc(collection(db, "requests"), song);
    setSong(initialState);
    props.onUpdate(true);
  };

  return (
    <Container>
      <TextField
        value={song.song}
        fullWidth
        id="song"
        label="Song"
        onChange={handleInputRequest}
        sx={{ m: "0.5rem 0" }}
      />
      <TextField
        value={song.artist}
        fullWidth
        id="artist"
        label="Artist"
        onChange={handleInputRequest}
        sx={{ m: "0.5rem 0" }}
      />
      <div className="button-container">
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={sendRequest}
          className="button"
        >
          Request
        </Button>
      </div>
    </Container>
  );
};

export default RequestForm;

const Container = styled.div`
  .button {
    margin: 1rem 0 2rem;
  }
  .button-container {
    width: 40%;
    margin: 0 auto;
    button {
      border-radius: 30px;
    }
  }
  .button:active {
    background: #70877f;
    position: relative;
    top: 2px;
  }
  @media only screen and (min-width: 900px) {
    .button-container {
      width: 25%;
    }
  }
`;
