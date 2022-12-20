import { useEffect, useState, useContext } from "react";
import { getNamePokemon, getPokemon } from "../../services/endpoints";
import { ThemeContext } from "../../contexts/theme-switcher";
import loadingIcon from "../../img/loading.gif";
import { 
  PokedexSection,
  PokedexResults,
  PokeCard,
  PokeId,
  PokeTypes,
  LoadingButton
} from "./styles";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/search-bar/search-bar";
import { strings } from "../../services/strings";
import { Unfound } from "../../components/unfound/unfound";
import PokemonNumber from "../../components/pokemon-number/pokemon-number";

export const Home = () => {
  const [pokedex, setPokedex] = useState([]);
  const [load, setLoad] = useState(10);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function fetchData() {
      const namesResponse = await getNamePokemon(load);
      const pokeList = namesResponse.map(
        async (name) => await getPokemon(name)
      );
      const allPokeList = await Promise.all(pokeList);
      setPokedex(allPokeList);
      setLoading(false);
    }

    fetchData();
  }, [load]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleLoad = () => {
    const loadPlus = 10;
    setLoad(load + loadPlus);
  };

  async function filterPokemon() {
    setShowMore(false);

    const namesResponse = await getNamePokemon(905);

    const pokeSearch = namesResponse.filter((name) => {
      if (name.includes(search.toLowerCase())) return name;
    });

    const pokeList = pokeSearch.map(
      async (pokemon) => await getPokemon(pokemon)
    );

    const allPokeList = await Promise.all(pokeList);

    setPokedex(allPokeList);
  }

  return (
    <PokedexSection theme={theme}>
      {loading ? (
        <div className="loading-screen">
          <img src={loadingIcon} className="loading-icon" alt="Loading..." />
          <span className="loading-message">{strings.loading}</span>
        </div>
      ) : (
        <>
          <SearchBar
            search={search}
            change={handleChange}
            filter={filterPokemon}
          />

          {pokedex.length !== 0 ? (
            <PokedexResults>
              {pokedex.map((pokemon, index) => {
                return (
                  <li key={index}>
                    <Link to={`/pokemon/${pokemon.name}`}>
                      <PokeCard theme={theme}>
                        <PokeId>
                          <img
                            src={pokemon.sprites.front_default}
                            alt={`${pokemon.name}'s appearance`}
                          />
                          <span>{pokemon.name}</span>
                          <PokemonNumber id={pokemon.id} />
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
            <Unfound />
          )}

          {showMore && (
            <LoadingButton theme={theme} onClick={() => handleLoad()}>
              {strings.components.loadingButton}
            </LoadingButton>
          )}
        </>
      )}
    </PokedexSection>
  );
};