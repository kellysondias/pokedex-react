import { useEffect, useState, useContext } from "react";
import { getNamePokemon, getPokemon } from "../../services/endpoints";
import { ThemeContext } from "../../contexts/theme-switcher";
import pokeball from "../../img/pokeball.png";
import loadingIcon from "../../img/loading.gif";
import openedPokeball from "../../img/opened-pokeball.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchBar } from "../search-bar/search-bar";

export const Pokedex = () => {
  const [pokedex, setPokedex] = useState([]);
  const [load, setLoad] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);
  let pagination = 10;

  useEffect(() => {
    async function fetchData() {
      const namesResponse = await getNamePokemon(pagination, load);
      const pokeList = namesResponse.map(
        async (name) => await getPokemon(name)
      );
      const allPokeList = await Promise.all(pokeList);
      setPokedex(allPokeList);
      setLoading(false);
    }

    fetchData();
  }, [load]);

  console.log("SEARCH:", search);
  console.log("POKEDEX:", pokedex);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  async function filterPokemon() {
    setShowMore(false);

    if (search !== "") {
      pagination = 923;
    } else {
      setShowMore(true);
      setLoad(0)
      pagination = 10;
    }

    const namesResponse = await getNamePokemon(pagination, load);
    const pokeList = namesResponse.map(async (name) => await getPokemon(name));
    const allPokeList = await Promise.all(pokeList);

    const pokeSearch = allPokeList.filter((pokemon) =>
      pokemon.name.includes(search.toLowerCase())
    );

    setPokedex(pokeSearch);
  }

  console.log("PAGINATION:", pagination)
  console.log("LOAD:", load)

  return (
    <PokedexSection theme={theme}>
      {loading ? (
        <div className="loading-screen">
          <img src={loadingIcon} className="loading-icon" alt="Loading..." />
          <span className="loading-message">Loading...</span>
        </div>
      ) : (
        <>
          <SearchBar
            placeholder="Search a Pokémon..."
            search={search}
            change={handleChange}
            filter={filterPokemon}
          />

          {pokedex.length !== 0 ? (
            <PokedexResults>
              {pokedex.map((pokemon, index) => {
                const maxDecPokemonNumber =
                  pokemon.id < 10 ? (
                    <span>{`#00${pokemon.id}`}</span>
                  ) : (
                    <span>{`#0${pokemon.id}`}</span>
                  );

                return (
                  <li key={index}>
                    <Link to={`/pokemon/${pokemon.id}`}>
                      <PokeCard theme={theme}>
                        <PokeId>
                          <img
                            src={pokemon.sprites.front_default}
                            alt={`${pokemon.name}'s appearance`}
                          />
                          <span>{pokemon.name}</span>
                          {pokemon.id < 100 ? (
                            <span>{maxDecPokemonNumber}</span>
                          ) : (
                            <span>{`#${pokemon.id}`}</span>
                          )}
                        </PokeId>
                        <PokeTypes theme={theme}>
                          {pokemon.types.map((type, index) => {
                            return <span key={index}>{type.type.name}</span>;
                          })}
                        </PokeTypes>
                      </PokeCard>
                    </Link>
                  </li>
                );
              })}
            </PokedexResults>
          ) : (
            <span>No Pokémon Matched Your Search!</span>
          )}

          {showMore && (
            <LoadingButton
              theme={theme}
              onClick={() => setLoad(load + pagination)}
            >
              Load more Pokémon
            </LoadingButton>
          )}
        </>
      )}
    </PokedexSection>
  );
};

const PokedexSection = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-top: 12px;
  background-color: ${(props) => props.theme.background};

  .loading-screen {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 1rem;
  }

  .loading-icon {
    max-width: 150px;
  }

  .loading-message {
    margin-top: 1rem;
    font-size: 2.3rem;
    text-align: center;
    margin-top: 1rem;
  }

  input {
    max-width: 300px;
    width: 100%;
  }
`;

const PokedexResults = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 83%;
  margin: 0 auto;
`;

const PokeCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${(props) => props.theme.cardBackground};
  margin: 1rem;
  border-radius: 5%;
  border: 0.5rem solid ${(props) => props.theme.border};
  padding: 2rem;
  max-width: 255px;
  cursor: pointer;

  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  img {
    margin: 1rem auto;
    width: 100%;
  }

  span {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color};
  }
`;

const PokeId = styled.div`
  justify-content: center;
  text-transform: uppercase;

  span:last-child {
    margin-left: 0.5rem;
  }
`;

const PokeTypes = styled.div`
  margin-top: 0.5rem;
  justify-content: space-evenly;
  color: ${(props) => props.theme.color};

  span {
    font-size: 2rem;
  }
`;

const LoadingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  cursor: pointer;
  padding: 0.3rem 1.1rem;
  border-radius: 20px;
  font-size: 2.8rem;
  letter-spacing: -1.5px;
  word-spacing: -4px;
  font-family: "VT323", monospace;
  text-transform: uppercase;
  text-align: center;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.color};
  border: 0.5rem solid ${(props) => props.theme.background};

  ::before {
    content: "";
    background: url(${pokeball}) no-repeat center center;
    background-size: contain;
    display: inline-block;
    width: 57px;
    height: 62px;
    margin-right: 0.7rem;
  }

  :hover {
    border-color: ${(props) => props.theme.buttonBorder};
  }

  :hover::before {
    content: "";
    background: url(${openedPokeball}) no-repeat center center;
    background-size: contain;
  }

  @media (max-width: 546px) {
    font-size: 2.5rem;

    ::before {
      width: 40px;
      height: 48px;
    }
  }
`;
