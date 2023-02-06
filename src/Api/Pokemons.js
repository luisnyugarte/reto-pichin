/* External */
import axios from "axios";
import getPokemonsJson from './../mocks/pokemons.json'

/* Others */
import {
  baseUrl
} from "../Utils/Constants/Api";


const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// API doesn't work

// export const getPokemons = async () => {
//     let dataResponse = {},
//     errorResponse = {};
//     await api
//       .get(
//         `?idAuthor=1`
//       )
//       .then(function (response) {
//         dataResponse = response.data;
//       })
//       .catch(function (error) {
//         errorResponse = error;
//       });
  
//     return { dataResponse, errorResponse };
//   };


// Get Pokemon of MOCKS
  export const getPokemons = async () => {
    return new Promise((resolve, reject) => {
      resolve(getPokemonsJson)
    })
  };

  // Put Pokemon of MOCKS
  export const editPokemons = async (pokemon) => {
    const newList = getPokemonsJson.pokemons.filter((item => {
      if(item.id === pokemon.pokemonId) {
        item.name = pokemon.values.name;
        item.description = pokemon.values.description;
      } 
      return getPokemonsJson.pokemons;
    }))
    return new Promise((resolve, reject) => {
      resolve(newList)
    })
  };

  // Delete Pokemon of MOCKS
  export const deletePokemons = async (id) => {
    const newList = getPokemonsJson.pokemons.filter((item, index) => {
      if(item.id === id) {
        return getPokemonsJson.pokemons.splice(index, 1);
      } 
      return getPokemonsJson.pokemons;
    });
    return new Promise((resolve, reject) => {
      resolve(newList)
    })
  };

  // Push Pokemon of MOCKS
    export const pushPokemons = async (pokemon) => {
      console.log(pokemon);
      getPokemonsJson.pokemons.unshift(
        {
          "name": pokemon.name,
          "description": pokemon.description,
          "id": pokemon.id,
          "types": [
              {
                  "type": {
                    "name": pokemon.types[0],
                  }
              },
              {
                  "type": {
                      "name": pokemon.types[1],
                  }
              }
          ],
          "image": pokemon.image
      }
      );
      return new Promise((resolve, reject) => {
        resolve(getPokemonsJson.pokemons)
      })
    };



