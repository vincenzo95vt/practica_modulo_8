const pokemons = []

export const getPokemons = () => {
    console.log(pokemons)
    return pokemons
}

export const addPokemons = (pokemon) => {
    pokemons.push(pokemon)
}

