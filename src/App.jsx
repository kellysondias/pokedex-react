import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { getNamePokemon, getPokemon } from './services/endpoints';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
   async function fetchData () {
    const namesResponse = await getNamePokemon()
    const setPokemonList = namesResponse.map(async (name) => {
      return await getPokemon(name)
    })
    return setPokemonList
  }
  /* fetchData() */
  setPokemon(fetchData())
  }, [])

  return (
    <>
      <Header />
    </>
  );
}

export default App;
