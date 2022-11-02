import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "styled-components";

import {
  FormControlLabel,
  FormLabel,
  FormControl,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const RSVP: React.FC = () => {
  const theme = useTheme();
  console.log(theme);

  const [formInfo, setFormInfo] = useState({
    name: "",
    rsvp: "yes",
    number: "",
    accom1: "",
    accom2: "",
    email: "",
    food: "",
    message: "",
  });
  const initialState = {
    accom1: false,
    accom2: false,
    email: false,
    food: false,
    sorry: false,
  };
  const [showing, setShowing] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if ((showing.sorry || showing.accom1) && e.target.id === "rsvp") {
      setShowing(initialState);
    }
    console.log(e.target.value, e.target);
    setFormInfo({ ...formInfo, [e.target.id]: e.target.value });
  };
  const handleNumberChange = (e: any) => {
    e.preventDefault();
    setFormInfo({ ...formInfo, number: e.target.value });
  };
  const handleShowAccom1 = () => {
    setShowing({
      ...showing,
      accom1: formInfo.rsvp === "yes" ? true : false,
      sorry: formInfo.rsvp === "yes" ? false : true,
    });
  };
  const handleShowAccom2 = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === "Wedderlie") {
      setShowing({
        ...showing,
        accom2: true,
        email: true,
        food: true,
      });
    } else if (e.target.value === "Black Bull") {
      setShowing({
        ...showing,
        accom2: false,
        email: true,
        food: true,
      });
    } else {
      setShowing({
        ...showing,
        accom2: false,
        email: false,
        food: true,
      });
    }
  };

  console.log(formInfo);
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <FormLabel>
          <h3>Kindly RSVP before 1 January, 2023</h3>
        </FormLabel>
        <TextField
          value={formInfo.name}
          fullWidth
          id="name"
          label="Names"
          onChange={handleInputChange}
          sx={{ m: "1rem 0" }}
        />
        <FormControl sx={{ display: "flex" }}>
          <FormLabel sx={{ textAlign: "center" }}>
            <h4>Will you be attending?</h4>
          </FormLabel>
          <RadioGroup
            sx={{ m: "1rem auto" }}
            id="rsvp"
            onChange={handleInputChange}
            value={formInfo.rsvp}
            row
          >
            <FormControlLabel
              value="yes"
              control={
                <Radio
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  id="rsvp"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={
                <Radio
                  icon={<HeartBrokenOutlinedIcon />}
                  checkedIcon={<HeartBrokenIcon />}
                  id="rsvp"
                />
              }
              label="No"
            />
          </RadioGroup>
          {formInfo.rsvp === "yes" ? (
            <Button
              style={{
                display: showing.accom1 || showing.sorry ? "none" : "flex",
              }}
              sx={{ mr: 0 }}
              variant="contained"
              onClick={handleShowAccom1}
            >
              Next
            </Button>
          ) : (
            <Button
              style={{
                display: showing.accom1 || showing.sorry ? "none" : "flex",
              }}
              sx={{ mr: 0 }}
              variant="contained"
              onClick={handleShowAccom1}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          )}
        </FormControl>
        <Typography
          style={{
            display: showing.sorry ? "flex" : "none",
            marginTop: "1rem",
          }}
        >
          We're sorry to hear you won't join us, but completely understand. Hope
          you are well and that our paths cross soon, as you are special to us!
        </Typography>
        <FormControl
          fullWidth
          style={{ display: showing.accom1 ? "flex" : "none" }}
        >
          <InputLabel>Guests</InputLabel>
          <Select
            id="number"
            value={formInfo.number}
            label="Guests"
            onChange={handleNumberChange}
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ display: showing.accom1 ? "flex" : "none" }}>
          <FormLabel sx={{ m: "1rem 0" }}>
            <h4>What is your preferred accomodation?</h4>
          </FormLabel>
          <RadioGroup
            onChange={(e) => {
              handleInputChange(e);
              handleShowAccom2(e);
            }}
            value={formInfo.accom1}
          >
            <FormControlLabel
              value="Wedderlie"
              control={<Radio id="accom1" />}
              label="Wedderlie"
            />
            <FormControlLabel
              value="Black Bull"
              control={<Radio id="accom1" />}
              label="Black Bull"
            />
            <FormControlLabel
              value="Edinburgh"
              control={<Radio id="accom1" />}
              label="Edinburgh"
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={{ display: showing.accom2 ? "flex" : "none" }}>
          <FormLabel sx={{ m: "1rem 0" }}>
            <h4>What is your alternative preference?</h4>
          </FormLabel>
          <RadioGroup onChange={handleInputChange} value={formInfo.accom2}>
            {formInfo.accom1 === "Wedderlie" && (
              <FormControlLabel
                value="Black Bull"
                control={<Radio id="accom2" />}
                label="Black Bull"
              />
            )}
            <FormControlLabel
              value="Edinburgh"
              control={<Radio id="accom2" />}
              label="Edinburgh"
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={{ display: showing.email ? "flex" : "none" }}>
          <FormLabel sx={{ m: "1rem 0 0" }}>
            <h4>
              Please leave your email so that we can send further information
              about your accommodation details.
            </h4>
          </FormLabel>
          <TextField
            margin="normal"
            value={formInfo.email}
            fullWidth
            id="email"
            label="Email"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl style={{ display: showing.food ? "flex" : "none" }}>
          <TextField
            margin="normal"
            value={formInfo.food}
            fullWidth
            id="food"
            label="Dietary Requirements or Allergies"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl style={{ display: showing.food ? "flex" : "none" }}>
          <TextField
            margin="normal"
            value={formInfo.message}
            fullWidth
            multiline
            minRows={2}
            maxRows={6}
            id="message"
            label="Questions, concerns, thoughts, jokes, etc."
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          fullWidth
          style={{ display: showing.food ? "flex" : "none", marginTop: "1rem" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default RSVP;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eae8e8;
  padding: 1rem;
  color: #34434d;
  h3,
  h4 {
    color: #34434d;
  }
`;
