import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    return (
        <>
            <h1>Rota</h1>
            <Link to="/">Voltar para a página inicial</Link>
        </>
    )
}