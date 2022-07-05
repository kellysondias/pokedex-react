const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
export let pokemonLoad = 10
const offsetValue = 0

export async function getPokemon(name) {
    const response = await fetch(`${baseUrl}/${name}`)
    return await response.json()
}

export async function getNamePokemon() {
    const response = await fetch(`${baseUrl}?limit=${pokemonLoad}&offset=${offsetValue}`)
    const json = await response.json()
    const pokemonNameList = json.results.map(pokemon => pokemon.name)
    return pokemonNameList
}