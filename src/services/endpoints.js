const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const offSetValue = 0

export async function getPokemon(name) {
    const url = await fetch(`${baseUrl}/${name}`)
    return await url.json()
}

export async function getPokemonId(id) {
    const url = await fetch(`${baseUrl}/${id}`)
    const json = await url.json()
    return await json
}

export async function getNamePokemon(pokemonLoad) {
    const url = await fetch(`${baseUrl}?limit=${pokemonLoad}&offset=${offSetValue}`)
    const json = await url.json()
    const pokemonNameList = json.results.map(pokemon => pokemon.name)
    return pokemonNameList
}