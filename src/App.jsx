import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { getNamePokemon, getPokemon } from './services/endpoints';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function fetchData () {
      const namesResponse = await getNamePokemon()
      const pokemonList = namesResponse.map(async (name) => {
        await getPokemon(name)
      })
      const allPokemon = await Promise.all(pokemonList)
      setPokemon(allPokemon)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
    </>
  );
}

export default App;
