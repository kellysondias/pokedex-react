import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/header/header';
import { getNamePokemon, getPokemon } from './services/endpoints';

function App() {
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    async function fetchData () {
      const namesResponse = await getNamePokemon()
      const pokeList = namesResponse.map(async name => await getPokemon(name))
      const allPokelist = await Promise.all(pokeList)
      setPokedex(allPokelist)
    }
    fetchData()
  }, [])
  /* console.log(pokedex) */
  return (
    <>
      <GlobalStyle />
      <Header />
      <ul>
        {pokedex.map((pokemon, index) => {
          const typeNames = pokemon.types.map(type => type.type.name)
          const [type1, type2] = typeNames
          let pokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>
          
          return <li key={index}>
                  <div>
                    <div>
                      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`} />
                      <span>{pokemon.name}</span>
                      {pokemon.id < 100 ? <span>{pokemonNumber}</span> : <span>{`#${pokemon.id}`}</span> }
                    </div>
                    <div>
                      <span>{type1}</span>
                      {type2 && <span>{type2}</span>}
                    </div>
                  </div>
                </li>
        })}
      </ul>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }
`

export default App;
