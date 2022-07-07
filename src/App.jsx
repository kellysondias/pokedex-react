import { useEffect, useState, useContext } from 'react';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-switcher';
import { Header } from './components/header/header';
import {Button} from './components/button/button'
import { getNamePokemon, getPokemon } from './services/endpoints';

function App() {
  const [pokedex, setPokedex] = useState([])
  const [load, setLoad] = useState(10)

  const pagination = 10

  useEffect(() => {
    async function fetchData() {
      const namesResponse = await getNamePokemon(load)
      const pokeList = namesResponse.map(async name => await getPokemon(name))
      let allPokelist = await Promise.all(pokeList)
      setPokedex(allPokelist)
    }
    fetchData()
  }, [load])

  /* console.log(pokedex) */

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header/>
        <ul>
         {pokedex.map((pokemon, index) => {
          const typeNames = pokemon.types.map(type => type.type.name)
          const [firstType, secondType] = typeNames
          let maxDecPokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>
  
          return <li key={index}>
             <div>
               <div>
                 <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`} />
                 <span>{pokemon.name.toUpperCase()}</span>
                 {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
               </div>
               <div>
                 <span>{firstType}</span>
                 {secondType && <span>{secondType}</span>}
               </div>
             </div>
           </li>
        })}
        </ul>
  
        <Button onClick={() => setLoad(load + pagination)}>Load more Pokémon</Button>
      </ThemeProvider>
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
    background-color: theme.background;
    color: theme.color; 
  }

  body {
    font-family: 'VT323', monospace;
  }
`

export default App;
