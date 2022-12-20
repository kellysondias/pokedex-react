import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAbilities, getPokemon } from "../../services/endpoints";
import { ThemeContext } from "../../contexts/theme-switcher";
import { 
  PokemonSection,
  PokedexCard,
  PokeId,
  PokeInfo
 } from "./styles";
import { useContext } from "react";
import PokemonNumber from "../../components/pokemon-number/pokemon-number";
import { strings } from "../../services/strings";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    image: "",
    moves: [],
    types: [],
  });

  const [abilities, setAbilities] = useState([]);

  const { id } = useParams();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function fetchPokemon() {
      const pokeData = await getPokemon(id);
      fetchAbilities(pokeData);
      setPokemon({
        name: pokeData.name,
        id: pokeData.id,
        image: pokeData.sprites.front_default,
        moves: pokeData.moves.slice(0, 5),
        types: pokeData.types,
      });
    }

    fetchPokemon();

    async function fetchAbilities(pokeData) {
      const abilitiesData = await getAbilities(pokeData.abilities);
      setAbilities(abilitiesData);
    }
  }, []);

  return (
    <PokemonSection theme={theme}>
      <PokedexCard theme={theme}>
        <PokeId theme={theme}>
          <div className="name-id">
            <span className="name">{pokemon.name.toUpperCase()}</span>
            <PokemonNumber id={pokemon.id} />
          </div>
          <div className="image">
            <img src={pokemon.image} alt={`${pokemon.name}'s appearance`}></img>
          </div>
        </PokeId>

        <PokeInfo theme={theme}>
          <h2>{strings.pages.pokemon.infoHeader}</h2>

          <div className="type" theme={theme}>
            <h3>{strings.pages.pokemon.typesHeader}</h3>
            <ul>
              {pokemon.types.map((type, index) => {
                return <li key={index} className="type-name">{type.type.name}</li>;
              })}
            </ul>
          </div>

          <div className="moves">
            <h3>{strings.pages.pokemon.movesHeader}</h3>
            <ul>
              {pokemon.moves.map((move, index) => 
                <li key={index} className="move">{move.move.name}</li>
              )}
            </ul>
          </div>

          <div className="abilities">
            <h3>{strings.pages.pokemon.abilitiesHeader}</h3>
            {abilities.map((ability, index) => {
              return (
                <div key={index} className="ability">
                  <h3>{ability.name}</h3>
                  {ability.effect_entries.slice(1).map((description, index) => (
                    <p key={index}>{description.effect}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </PokeInfo>
      </PokedexCard>
    </PokemonSection>
  );
};