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
                            <PokeId>
                                <img src={pokemon.sprites.front_default} alt={`${pokemon.name}'s appearance`} />
                                <span>{pokemon.name.toUpperCase()}</span>
                                {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
                            </PokeId>
                            <PokeTypes>
                                <span>{firstType}</span>
                                {secondType && <span>{secondType}</span>}
                            </PokeTypes>
                        </PokeCard>
                    </li>
            })}
        </PokedexResults>

        <Button style={{margin: '0 auto', cursor: 'pointer'}} onClick={() => setLoad(load + pagination)}>Load more Pokémon</Button>
    </PokedexSection>
    )
}

const PokedexSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    background-color: ${props => props.theme.background}
`

const PokedexResults = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
`

const PokeCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${props => props.theme.cardBackground};
    margin: 10px;
    border-radius: 5%;
    border: 5px solid ${props => props.theme.border};
    padding: 20px;
    max-width: 255px;
    
    div {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    img {
        margin: 10px auto;
        width: 100%;
    }

    span {
        font-size: 2.5rem;
        color: ${props => props.theme.color}
    }
`

const PokeId = styled.div`
    justify-content: center;

    span:last-child {
        margin-left: 5px;
    }
`

const PokeTypes = styled.div`
    margin-top: 5px;
    justify-content: space-evenly;
`