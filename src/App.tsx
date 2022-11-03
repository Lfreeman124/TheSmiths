import MasterRouter from "./components/MasterRouter";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c0694b",
    },
    secondary: {
      main: "#34434d",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MasterRouter />
      </ThemeProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway";
  * {
    box-sizing: border-box;
    margin: 0;
  }
`;
