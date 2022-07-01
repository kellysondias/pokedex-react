import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/header/header';
import { getNamePokemon, getPokemon } from './services/endpoints';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function fetchData () {
      const namesResponse = await getNamePokemon()
      const pokemonList = namesResponse.map(async (name) => {
        return await getPokemon(name)
      })
      const allPokemon = await Promise.all(pokemonList)
      setPokemon(allPokemon)
    }
    fetchData()
  }, [])
  console.log(pokemon)
  return (
    <>
      <GlobalStyle />
      <Header />
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
