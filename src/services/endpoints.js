const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const offset = 0

export async function getPokemon(name, id) {
    const url = await fetch(`${baseUrl}/${name || id}`)
    const json = await url.json()
    return json
}

export async function getNamePokemon(load) {
    const url = await fetch(`${baseUrl}?limit=${load}&offset=${offset}`)
    const json = await url.json()
    const pokemonNameList = json.results.map(pokemon => pokemon.name)
    return pokemonNameList
}

export async function getAbilities(abilities) {
    const abilitiesResponse = abilities.map(async ability => {
        const url = await fetch(ability.ability.url)
        const json = await url.json()
        return json
    })
    const allAbilitiesResponse = await Promise.all(abilitiesResponse)
    return allAbilitiesResponse
}