import { useEffect, useState, useContext } from 'react';
import {Button} from '../button/button'
import { getNamePokemon, getPokemon } from '../../services/endpoints';
import { ThemeContext } from '../../contexts/theme-switcher';
import styled from 'styled-components';

export const Pokedex = () => {

 const [pokedex, setPokedex] = useState([])
 const [load, setLoad] = useState(10)
 const {theme} = useContext(ThemeContext)
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
  
  return (
    <PokedexSection theme={theme}>
        <PokedexResults>
            {pokedex.map((pokemon, index) => {
            const typeNames = pokemon.types.map(type => type.type.name)
            const [firstType, secondType] = typeNames
            let maxDecPokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>

            return <li key={index}>
                    <PokeCard theme={theme}>
                        <div>
                        <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`} />
                        <span>{pokemon.name.toUpperCase()}</span>
                        {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
                        </div>
                        <div>
                        <span>{firstType}</span>
                        {secondType && <span>{secondType}</span>}
                        </div>
                    </PokeCard>
                </li>
            })}
        </PokedexResults>

        <Button onClick={() => setLoad(load + pagination)}>Load more Pokémon</Button>
    </PokedexSection>
    )
}

const PokedexSection = styled.section`
    background-color: ${props => props.theme.background};
`

const PokedexResults = styled.ul`
    display: flex;
    flex-flow: row wrap;
`

const PokeCard = styled.div`
background-color: ${props => props.theme.color};
    margin: 0 10px;
`