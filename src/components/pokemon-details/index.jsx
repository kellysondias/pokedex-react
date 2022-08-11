import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAbilities, getPokemon } from '../../services/endpoints'
import { ThemeContext } from '../../contexts/theme-switcher';
import styled from 'styled-components';
import { useContext } from 'react';

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        image: '',
        moves: [],
        types: []
    })

    const [abilities, setAbilities] = useState([])

    const { id } = useParams()

    const {theme} = useContext(ThemeContext)

    const maxDecPokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>
   
    useEffect(() => {  
        async function fetchPokemon() {
            const pokeData = await getPokemon(id)
            fetchAbilities(pokeData)
            setPokemon({
                name: pokeData.name,
                id: pokeData.id,
                image: pokeData.sprites.front_default,
                moves: pokeData.moves.slice(0,5),
                types: pokeData.types,
            })
        }
        
        fetchPokemon()

        async function fetchAbilities (pokeData) {
            const abilitiesData = await getAbilities(pokeData.abilities)
            setAbilities(abilitiesData)
        }
    }, [])

    console.log("POKÉMON DATA:",pokemon)

    console.log("ABILITIES:", abilities)

    return (
        <PokemonSection theme={theme}>
            <PokedexCard theme={theme}>
                <PokeId theme={theme}>
                    <div className='name-id'>
                        <span className="name">{pokemon.name.toUpperCase()}</span>
                        {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
                    </div>
                    <div className="image">
                        <img src={pokemon.image} alt={`${pokemon.name}'s appearance`}></img>
                    </div>
                </PokeId>

                <PokeInfo theme={theme}>
                    <h2>Info</h2>

                    <div className='type' theme={theme}>
                        <h3>Type</h3>
                        <ul>
                            {pokemon.types.map( type => {
                                return <li>{type.type.name}</li>
                            })}
                        </ul>
                    </div>

                    <div className='moves'>
                        <h3>Moves</h3>
                        <ul>
                            {pokemon.moves.map( move => {
                                return <li>{move.move.name}</li>
                            })}
                        </ul>
                    </div>

                    <div className='abilities'>
                        <h3>Abilities</h3>
                        {abilities.map( ability => {
                                return (
                                    <div className='ability'>
                                        <h3>{ability.name}</h3>
                                        {ability.effect_entries.slice(1).map(description => <p>{description.effect}</p>)}
                                    </div>
                                )
                            })}
                    </div>
                </PokeInfo>
            </PokedexCard>
        </PokemonSection>
    )
}

const PokemonSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${props => props.theme.background};
`

const PokedexCard = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 3.3rem 0;
    align-items: center;
    width: 80%;
    border-radius: 1.5rem;
    background-color: ${props => props.theme.pokedexCard};
`

const PokeId = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-right: 4.5rem;
    color: ${props => props.theme.pokemoncolor};

    .name-id {
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
        padding: 0.2rem 3rem;
    }

    .name-id span {
        text-align: center;
        font-size: 23px;
    }

    .name {
        margin-right: 1rem;
    }

    .image {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .name-id, .image {
        background-color: ${props => props.theme.pokemonProfileBg};
        border: 0.2rem solid ${props => props.theme.pokemonBorder};
        border-radius: 1rem;
        width: 100%;
    }

    .image img {
        width: 300px;
    }
`

const PokeInfo = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 50%;
    text-align: center;
    color: ${props => props.theme.pokemoncolor};
    border: 0.2rem solid ${props => props.theme.pokemonBorder};
    border-radius: 1rem;
    background-color: ${props => props.theme.pokemonInfoBg};

    h2 {
        font-size: 3.5rem;
        border-bottom: 2px solid ${props => props.theme.pokemonInfoHeaderBorderColor};
        width: 100%;
    }

    h3 {
        font=size: 2.5rem;
    }
`