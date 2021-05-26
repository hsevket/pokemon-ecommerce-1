import styled from "styled-components";
import { GRAY } from "./constants";
import { Card } from "./components/Card";
import { Total } from "./components/Total";

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1024px;
  background-color: ${GRAY};
  margin: auto;
`;

const PanelStyle = styled.div`
  margin: 1rem;
  background-color: white;
  padding: 1rem;
`;
const MOCK = {
  img:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  name: "BULBASAUR",
  type: "Grass",
  price: 64,
  quantity: 1,
};

const MockItems = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 30; i++) {
  MockItems.push(MOCK);
}

const ScrollStyle = styled.div`
  overflow-y: scroll;
  max-height: 500px;
`;

export function ShoppingCart() {
  return (
    <LayoutStyle>
      <PanelStyle>
        <h2>Place you order (1 article)</h2>
        <ScrollStyle>
          {MockItems.map((item) => (
            <Card {...item} />
          ))}
        </ScrollStyle>
      </PanelStyle>
      <PanelStyle>
        <Total
          total={MockItems.reduce((acc, current) => acc + current.price, 0)}
        />
      </PanelStyle>
    </LayoutStyle>
  );
}
