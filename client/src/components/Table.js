import { useState, useEffect } from "react";
import styled from "styled-components";

const Table = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const data = [
      { name: "ETH", qty: 20, price: 1200 },
      { name: "BTC", qty: 1, price: 21000 },
      { name: "SOL", qty: 50, price: 100 },
    ];
    setCurrentPortfolio(data);

    let sum = 0;
    data.forEach((coin) => {
      sum += coin.qty * coin.price;
    });
    setTotalValue(sum);
  }, [setCurrentPortfolio]);

  currentPortfolio && console.log(currentPortfolio);

  return (
    <Main>
      <Total>Total Value: ${totalValue}</Total>
      <Folio>
        <Tbody>
          <Tr>
            <Th>COIN</Th>
            <Th>QTY</Th>
            <Th>MARKET PRICE</Th>
            <Th>VALUE</Th>
          </Tr>
          <>
            {currentPortfolio &&
              currentPortfolio.map((coin) => {
                return (
                  <Tr>
                    <Td>{coin.name}</Td> <Td>{coin.qty}</Td>
                    <Td>{coin.price}</Td>
                    <Td>{coin.price * coin.qty}</Td>
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
  font-size: 1.5em;
`;
const Folio = styled.table`
  font-size: 1.5em;
  width: 50%;
`;
const Th = styled.th`
  background-color: white;
  color: black;
  padding: 2%;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td`
  border: solid grey 1px;
  padding: 2%;
`;

export default Table;
