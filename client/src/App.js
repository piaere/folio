import styled from "styled-components";

function App() {
  return (
    <Main>
      <Header>Portfolio Tracker</Header>

    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Header = styled.header`
  padding-top: 10vh;
  text-align: center;
  color: white;
  font-family: "Xanh Mono", monospace;
  font-size: 2em;
`;

export default App;
