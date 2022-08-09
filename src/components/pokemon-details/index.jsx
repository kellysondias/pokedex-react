import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getPokemonId } from '../../services/endpoints'

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()
   
    useEffect(() => {  
        async function fetchData() {
            const pokemonResponse = await getPokemonId(id)
            console.log("POKEMONRESPONSE", pokemonResponse.id)
            setPokemon(pokemonResponse)
        }
        
        fetchData()
    }, [])

    console.log("POKEMENES",pokemon)
    
    /* console.log("id do useParams:", id)
    console.log("POKEMENES", pokemon)
    console.log("Mensagem da função getPokemonId:",getPokemonId(id)) */


    return (
        <>
            <p style={{textAlign: "center", fontSize: "30px"}}>{pokemon.name}</p>
        </>
    )
}