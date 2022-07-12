import { useState, useEffect } from "react";
import styled from "styled-components";

const Table = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    fetch("/get-data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCurrentPortfolio(data.data);
        let sum = 0;
        data.data.forEach((coin) => {
          sum += coin.qty * coin.price;
        });
        setTotalValue(sum);
      })
      .catch((error) => console.log("Error: ", error));
  }, []);

//   useEffect(() => {
//     fetch("/get-crypto")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.data);
//       })
//       .catch((error) => console.log("Error: ", error));
//   }, []);

  currentPortfolio && console.log(currentPortfolio);

  return (
    <Main>
      <Total>$ {totalValue.toLocaleString("en-US")}</Total>
      <Folio>
        <Tbody>
          <Tr>
            <Th>Coin</Th>
            <Th>Qty</Th>
            <Th>Price</Th>
            <Th>Value (USD)</Th>
          </Tr>
          <>
            {currentPortfolio &&
              currentPortfolio.map((coin) => {
                const total = coin.price * coin.qty;
                return (
                  <Tr>
                    <Td>{coin.name}</Td> <Td>{coin.qty}</Td>
                    <Td>{coin.price.toLocaleString("en-US")}</Td>
                    <Td>{total.toLocaleString("en-US")}</Td>
                  </Tr>
                );
              })}
          </>
        </Tbody>
      </Folio>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;

const Total = styled.div`
  padding-bottom: 1em;
  font-size: 2em;
`;
const Folio = styled.table`
  font-size: 1.5em;
  width: 50%;
`;
const Th = styled.th`
  background-color: teal;
  color: black;
  padding: 2%;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td`
  border: solid teal 0.5px;
  padding: 2%;
`;

export default Table;
