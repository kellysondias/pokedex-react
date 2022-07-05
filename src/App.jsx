import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/header/header';
import { getNamePokemon, getPokemon, pokemonLoad } from './services/endpoints';

function App() {
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    async function fetchData() {
      const namesResponse = await getNamePokemon()
      const pokeList = namesResponse.map(async name => await getPokemon(name))
      let allPokelist = await Promise.all(pokeList)
      setPokedex(allPokelist)
    }
    fetchData()
  }, [])
  /* console.log(pokedex) */
  return (
    <>
      <GlobalStyle />
      <Header />
      {pokedex.map((pokemon, index) => {
        const typeNames = pokemon.types.map(type => type.type.name)
        const [firstType, secondType] = typeNames
        let maxDecPokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>

        return <ul key={index}>
        <li>
           <div>
             <div>
               <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`} />
               <span>{pokemon.name}</span>
               {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
             </div>
             <div>
               <span>{firstType}</span>
               {secondType && <span>{secondType}</span>}
             </div>
           </div>
         </li>
       </ul>
      })}
      <button onClick={() => pokemonLoad += pokemonLoad}>Load more Pokémon</button>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }

  html {
    font-size: 62.5%;
  }
`

export default App;
