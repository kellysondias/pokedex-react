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
  console.log(pokedex)
  return (
    <>
      <GlobalStyle />
      <Header />
      <ul>
        {pokedex.map((pokemon, index) => 
                                <li key={index}>
                                  <div>
                                    <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`}></img>
                                  </div>
                                </li>)}
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
