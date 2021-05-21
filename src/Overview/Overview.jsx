import { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { PokemonCard } from "../common/PokemonCard";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  padding: 25px 300px;
  grid-template-columns: auto;
  grid-gap: 1rem;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 340px);
  grid-gap: 1rem;
  justify-content: center;
`;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 100px;
  grid-gap: 1rem;
`;

const Filter = styled.input`
  font-size: 23px;
`;

export const Overview = ({ data }) => {
  const [filter, setFilter] = useState('');
  const [sorting, setSorting] = useState('');
  const history = useHistory();

  const handlePokemonClick = (id) => {
    history.push(`/${id}`);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSotringChange = (e) => {
    setSorting(e.target.value);
  };

  const filteredPokemons = useMemo(() => {
    let pokemons = [];
    switch (sorting) {
      case 'ASC':
        pokemons = [...data].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'DESC':
        pokemons = [...data].sort((a, b) => a.name.localeCompare(b.name)).reverse();
        break;
      default:
        pokemons = [...data];
        break;
    }

    if (!filter.length) {
      return pokemons;
    };

    return pokemons.filter((p) => p.name.includes(filter.toLowerCase()))
  }, [data, filter, sorting]);

  return (
    <Container>
      <FiltersContainer>
        <Filter
          type="text"
          placeholder="Filter pokemons by name"
          value={filter}
          onChange={handleFilterChange}
        />
        <select name="sorting" onChange={handleSotringChange} value={sorting}>
          <option value="">No sorting</option>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </FiltersContainer>
      <CardsWrapper>
        {
          filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.name}
              image={`https://pokeres.bastionbot.org/images/pokemon/${
                pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
              }.png`}
              name={pokemon.name}
              click={() => handlePokemonClick(index + 1)}
              price={pokemon.price}
            />
          ))
        }
      </CardsWrapper>
    </Container>
  );
};
