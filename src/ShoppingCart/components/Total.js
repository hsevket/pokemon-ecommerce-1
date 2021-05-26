import styled from "styled-components";
import { HRStyle } from "./Hr";

const TotalItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = ({ total }) => (
  <div>
    <h2>Total</h2>
    <TotalItemStyle>
      <span>Subtotal</span>
      <span>{(total * 0.8).toFixed(2)}</span>
    </TotalItemStyle>
    <HRStyle />
    <TotalItemStyle>
      <strong>Total (VAT included)</strong>
      <strong>{total}</strong>
    </TotalItemStyle>
  </div>
);
