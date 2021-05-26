import styled from "styled-components";
import { GRAY } from "../constants";
import { HRStyle } from "./Hr";

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  img {
    width: 100px;
    background-color: ${GRAY};
  }
  div {
    padding: 1rem;
  }
`;

const CardPriceStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Card = ({ name, img, type, price, quantity }) => (
  <>
    <CardStyle>
      <img src={img} alt={name} />
      <div>
        <p>{name}</p>
        <p>{type}</p>
      </div>
      <CardPriceStyle>
        <p>{quantity}</p>
        <p>{price}</p>
      </CardPriceStyle>
    </CardStyle>
    <HRStyle />
  </>
);
