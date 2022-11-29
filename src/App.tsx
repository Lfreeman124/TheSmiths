import React, { useState, useEffect } from "react";
import MasterRouter from "./components/MasterRouter";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "./State";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4b3b40",
      light: "#c9c3af",
      contrastText: "#c9c3af",
    },
    secondary: {
      main: "#70877f",
      contrastText: "#eee7dd",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

export const colors = {
  red: "#4b3b40",
  redhsl: "hsl(342, 12%, 26%)",
  beige: "hsl(35, 33%, 70%)",
  grey: "#d8d6da",
  greyhsl: "",
  green: "#70877f",
  greenhsl: "hsl(159, 9%, 48%)",
  pink: "#b59c8b",
  pinkhsl: "hsl(24, 22%, 75%)",
  background: "#ebe8e4",
  backgroundhsl: "hsl(34, 15%, 91%)",
};

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const matches = useMediaQuery("(max-width:900px)");

  function onLoad() {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }
  window.onunload = function () {};

  useEffect(() => {
    setIsMobile(matches);
    onLoad;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <UserContext.Provider value={{ showMenu, setShowMenu, isMobile }}>
        <ThemeProvider theme={theme}>
          <MasterRouter />
        </ThemeProvider>
      </UserContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #ebe8e4;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway";
  * {
    box-sizing: border-box;
  }
`;
