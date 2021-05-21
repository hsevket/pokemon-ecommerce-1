import styled from "styled-components";

const Wrapper = styled.div`
  border: 8px solid black;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  aspect-ratio: 3 / 4;
  background-color: white;

  :hover {
    cursor: pointer;
    border-color: gold;
  }
`;

const Text = styled.p`
font-family: monospace;
  text-align: center;
`;

const Name = styled(Text)`
  margin-top: 18%;
`;

export const PokemonCard = ({
  name, image, click, price,
}) => (
  <Wrapper
    onClick={click}
  >
    <img src={image} alt={name} />
    <Name>{name}</Name>
    <Text>{price || '???'} &euro;</Text>
  </Wrapper>
);
