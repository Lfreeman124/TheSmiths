import MasterRouter from "./components/MasterRouter";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <MasterRouter />
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
