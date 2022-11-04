import MasterRouter from "./components/MasterRouter";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4b3b40",
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
  background: #eee7dd;
  min-height: 100vh;
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
