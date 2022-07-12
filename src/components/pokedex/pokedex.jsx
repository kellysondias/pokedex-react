import { useEffect, useState, useContext } from 'react';
import { getNamePokemon, getPokemon } from '../../services/endpoints';
import { ThemeContext } from '../../contexts/theme-switcher';
import pokeball from '../../img/pokeball.png'
import openedPokeball from '../../img/opened-pokeball.png'
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
                                <span>{pokemon.name}</span>
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

        <LoadingButton theme={theme} onClick={() => setLoad(load + pagination)}>Load more Pokémon</LoadingButton>
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
    margin: 1.0rem;
    border-radius: 5%;
    border: 0.5rem solid ${props => props.theme.border};
    padding: 2rem;
    max-width: 255px;
    
    div {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    img {
        margin: 1rem auto;
        width: 100%;
    }

    span {
        font-size: 2.5rem;
        color: ${props => props.theme.color}
    }
`

const PokeId = styled.div`
    justify-content: center;
    text-transform: uppercase;

    span:last-child {
        margin-left: 0.5rem;
    }
`

const PokeTypes = styled.div`
    margin-top: 0.5rem;
    justify-content: space-evenly;
`

const LoadingButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto; 
    cursor: pointer; 
    padding: 0.3rem 1.1rem;
    border-radius: 20px;
    font-size: 2.8rem;
    letter-spacing: -1.5px;
    word-spacing: -4px;
    font-family: 'VT323', monospace;
    text-transform: uppercase;
    text-align: center;
    background-color: ${props => props.theme.buttonBackground};
    color: ${props => props.theme.color}; 
    border: 0.5rem solid ${props => props.theme.background};

    ::before {
        content: "";
        background: url(${pokeball}) no-repeat center center;
        background-size: contain;
        display: inline-block;
        width: 80px;
        height: 80px;
        margin-right: 0.7rem;
    }

    :hover {
        border-color: ${props => props.theme.buttonBorder}
    }

    :hover::before {
        content: "";
        background: url(${openedPokeball}) no-repeat center center;
        background-size: contain;
    }
`