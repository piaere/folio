import styled from "styled-components";
import Table from "./components/Table";

function App() {
  return (
    <Main>
      <Header>Portfolio Tracker</Header>
      <Table />
    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: "Xanh Mono", monospace;
`;

const Header = styled.header`
  padding-top: 10vh;
  text-align: center;
  font-size: 2em;
`;

export default App;
