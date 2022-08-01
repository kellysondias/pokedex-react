import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    return (
        <div style={{
            textAlign: "center", 
            marginTop: "10px", 
            fontSize: "2rem"
            }}>
            <h1 style={{fontSize: "4rem"}}>Rota</h1>
            <Link to="/"><p style={{marginTop: "5px"}}>Voltar para a página inicial</p></Link>
        </div>
    )
}