const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const offSetValue = 0

export async function getPokemon(name, id) {
    const url = await fetch(`${baseUrl}/${name || id}`)
    const json = await url.json()
    return json
}

export async function getNamePokemon(pokemonLoad, search) {
    const url = await fetch(`${baseUrl}?limit=${pokemonLoad}&offset=${offSetValue}`)
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

export async function getSearch(search) {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    const json = await url.json()
    const pokemonName = json.name
    return json
}