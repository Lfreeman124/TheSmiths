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
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
`;
