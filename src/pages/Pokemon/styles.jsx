import styled from "styled-components";

export const PokemonSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export const PokedexCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 50px auto;
  width: 80%;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.pokedexCard};
`;

export const PokeId = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  margin-right: 4.5rem;
  color: ${(props) => props.theme.pokemonColor};

  .name-id {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 0.2rem 3rem;
  }

  .name-id span {
    text-align: center;
    font-size: 23px;
  }

  .name {
    margin-right: 1rem;
  }

  .image {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .name-id,
  .image {
    background-color: ${(props) => props.theme.pokemonProfileBg};
    border: 0.2rem solid ${(props) => props.theme.pokemonBorder};
    border-radius: 1rem;
    width: 100%;
  }

  .image img {
    width: 350px;
  }

  @media (max-width: 1006px) {
    margin-right: 0.4rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 450px) {
    width: 60%;

    .name-id span {
      font-size: 1.5rem;
    }
  }
`;

export const PokeInfo = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 400px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.pokemonColor};
  border: 0.2rem solid ${(props) => props.theme.pokemonBorder};
  border-radius: 1rem;
  background-color: ${(props) => props.theme.pokemonInfoBg};

  h2 {
    font-size: 4.5rem;
    border-bottom: 2px solid
      ${(props) => props.theme.pokemonInfoHeaderBorderColor};
    width: 100%;
  }

  h3 {
    font-size: 2.7rem;
  }

  li {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  .type ul {
    display: flex;
  }

  .type-name {
    font-size: 2.3rem;
    margin: 0.5rem auto;
    padding: 0.4rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.pokemonTypeColor};
    background-color: ${(props) => props.theme.pokemonTypeBg};
  }

  .type-name:first-child {
    margin-right: 0.5rem;
  }

  .abilities h3 {
    margin-bottom: 5px;
  }

  .moves .move,
  .abilities .ability {
    margin: 0.7rem auto;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 3.5rem;
    }

    h3 {
      font-size: 2rem;
    }

    li {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    .type-name {
      font-size: 1.5rem;
    }
  }
`;