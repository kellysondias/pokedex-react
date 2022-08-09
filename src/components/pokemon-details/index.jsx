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
            console.log("POKEMONRESPONSE DATA",pokemonResponse.data)
            /* const resolvePokeData = await Promise.any(pokemonResponse) */
            /* setPokemon(pokemonResponse.data) */
        }
        
        fetchData()
    }, [])
    
    console.log("id do useParams:", id)
    /* console.log("POKEMENES", pokemon)
    console.log("Mensagem da função getPokemonId:",getPokemonId(id)) */


    return (
        <>
            <div style={{
                textAlign: "center", 
                marginTop: "10px", 
                fontSize: "2rem"
                }}>
                <h1 style={{fontSize: "4rem"}}>Rota</h1>
                <Link to="/"><p style={{marginTop: "5px"}}>Voltar para a página inicial</p></Link>
            </div>

            {/* <p>{pokemon.name}</p> */}
        </>
    )
}