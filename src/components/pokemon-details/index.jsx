import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../services/endpoints'
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

    const { id } = useParams()

    const {theme} = useContext(ThemeContext)

    const maxDecPokemonNumber = pokemon.id < 10 ? <span>{`#00${pokemon.id}`}</span> : <span>{`#0${pokemon.id}`}</span>
   
    useEffect(() => {  
        async function fetchData() {
            const pokeData = await getPokemon(id)
            setPokemon({
                name: pokeData.name,
                id: pokeData.id,
                image: pokeData.sprites.front_default,
                moves: pokeData.moves,
                types: pokeData.types
            })
        }
        
        fetchData()
    }, [])

    console.log("POKÉMON DATA:",pokemon)

    return (
        <PokemonSection theme={theme}>
            <PokedexCard theme={theme}>
                <PokeId>
                    <div>
                        <span className="name">{pokemon.name.toUpperCase()}</span>
                        {pokemon.id < 100 ? <span>{maxDecPokemonNumber}</span> : <span>{`#${pokemon.id}`}</span>}
                    </div>
                    <div></div>
                </PokeId>
            </PokedexCard>
        </PokemonSection>
    )
}

const PokemonSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    padding-top: 12px;
    background-color: ${props => props.theme.background};
`

const PokedexCard = styled.div`
    background-color: ${props => props.theme.pokedexCard};
    width: 80%;
    margin: 0 auto;
`

const PokeId = styled.div`
    div:first-child {
        display: flex;
        justify-content: center;
    }

    div:first-child span {
        text-align: center;
        font-size: 23px;
        margin-top: 10px;
    }

    .name {
        margin-right: 10px;
    }
`