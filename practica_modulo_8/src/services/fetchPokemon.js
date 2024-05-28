let pokemons = [{
    "id": 1234,
    "height": 7,
    "weight": 69,
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "name": "bulbasaur",
    "type": ["grass", "poison"]
},{
    "id": 1236,
    "height": 11,
    "weight": 190,
    "url": "https://pokeapi.co/api/v2/pokemon/5/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "name": "charmeleon",
    "type": ["fire"]
},{
    "id": 1235,
    "height": 6,
    "weight": 85,
    "url": "https://pokeapi.co/api/v2/pokemon/4/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "name": "charmander",
    "type": ["fire"]
},{
    "id": 1250,
    "height": 20,
    "weight": 1000,
    "url": "https://pokeapi.co/api/v2/pokemon/3/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "name": "venusaur",
    "type": ["grass", "poison"]
},{
    "id": 1260,
    "height": 10,
    "weight": 130,
    "url": "https://pokeapi.co/api/v2/pokemon/2/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "name": "ivysaur",
    "type": ["grass", "poison"]
},
{
    "id": 128,
    "height": 14,
    "weight": 884,
    "url": "https://pokeapi.co/api/v2/pokemon/128/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "name": "tauros",
    "type": ["normal"]
},{
    "id": 115,
    "height": 22,
    "weight": 800,
    "url": "https://pokeapi.co/api/v2/pokemon/115/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "name": "kangaskhan",
    "type": ["normal"]
},{
    "id": 142,
    "height": 18,
    "weight": 590,
    "url": "https://pokeapi.co/api/v2/pokemon/142/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "name": "aerodactyl",
    "type": ["rock", "flying"]
},{
    "id": 131,
    "height": 25,
    "weight": 2200,
    "url": "https://pokeapi.co/api/v2/pokemon/131/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "name": "lapras",
    "type": ["water", "ice"]
},{
    "id": 143,
    "height": 21,
    "weight": 4600,
    "url": "https://pokeapi.co/api/v2/pokemon/143/",
    "pathImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "name": "snorlax",
    "type": ["normal"]
}



]
const pokemonDetail = {}

export const getPokemons = () => {
    console.log(pokemons)
    return pokemons
}

export const addPokemons = (pokemon) => {
    pokemons.push(pokemon)
}

export const getPokemonDetail = () => {
    return pokemonDetail
}

export const addPokemonDetail = (newInfo) => {
    pokemonDetail.newInfo = newInfo   
}

export const removePokemonFromArray = (value) => {
    pokemons = pokemons.filter((pokemon) => pokemon.id !== value.id)
}