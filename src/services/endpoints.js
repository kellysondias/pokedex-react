const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const pokemonLength = 10
const offsetValue = 0

export async function getPokemon(name) {
    const url = await fetch(`${baseUrl}/${name}`)
    return await url.json()
}

export async function getNamePokemon() {
    const url = await fetch(`${baseUrl}?limit=${pokemonLength}&offset=${offsetValue}`)
    const json = await url.json()
    const pokemonListName = json.results.map(pokemon => pokemon.name)
    return pokemonListName
}