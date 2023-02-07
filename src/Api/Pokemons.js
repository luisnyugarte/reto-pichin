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

// Get pokemons list
export const getPokemonsApi = async () => {
    let dataResponse = {},
    errorResponse = {};
    await api
      .get(
        `/?idAuthor=1`
      )
      .then(function (response) {
        dataResponse = response.data;
      })
      .catch(function (error) {
        errorResponse = error;
      });
  
    return { dataResponse, errorResponse };
  };

// Create a new pokemon
export const pushPokemons = async (params) => {
  let dataResponse = {},
  errorResponse = {};
  await api
    .post('/', params)
    .then(function (response) {
      dataResponse = response.data;
    })
    .catch(function (error) {
      errorResponse = error;
    });

  return { dataResponse, errorResponse };
};

// Get pokemons by ID
export const getPokemonsById = async (id) => {
  let dataResponse = {},
  errorResponse = {};
  await api
    .get(
      `/${id}`
    )
    .then(function (response) {
      dataResponse = response.data;
    })
    .catch(function (error) {
      errorResponse = error;
    });

  return { dataResponse, errorResponse };
};

// Update pokemon by ID
export const editPokemon = async (params) => {
  let dataResponse = {},
  errorResponse = {};
  await api
    .put(`/${params.id.id}`, params.values)
    .then(function (response) {
      dataResponse = response.data;
    })
    .catch(function (error) {
      errorResponse = error;
    });

  return { dataResponse, errorResponse };
};

// Delete pokemon by ID
export const deletePokemon = async (id) => {
  let dataResponse = {},
  errorResponse = {};
  await api
    .delete(`/${id}`)
    .then(function (response) {
      dataResponse = response.data;
    })
    .catch(function (error) {
      errorResponse = error;
    });

  return { dataResponse, errorResponse };
};

// Get Pokemon of MOCKS old version
  // export const getPokemons = async () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(getPokemonsJson)
  //   })
  // };

  // Put Pokemon of MOCKS old version
  // export const editPokemons = async (pokemon) => {
  //   const newList = getPokemonsJson.pokemons.filter((item => {
  //     if(item.id === pokemon.pokemonId) {
  //       item.name = pokemon.values.name;
  //       item.description = pokemon.values.description;
  //     } 
  //     return getPokemonsJson.pokemons;
  //   }))
  //   return new Promise((resolve, reject) => {
  //     resolve(newList)
  //   })
  // };

  // Delete Pokemon of MOCKS old version
  // export const deletePokemons = async (id) => {
  //   const newList = getPokemonsJson.pokemons.filter((item, index) => {
  //     if(item.id === id) {
  //       return getPokemonsJson.pokemons.splice(index, 1);
  //     } 
  //     return getPokemonsJson.pokemons;
  //   });
  //   return new Promise((resolve, reject) => {
  //     resolve(newList)
  //   })
  // };

  // Push Pokemon of MOCKS old version
    // export const pushPokemons = async (pokemon) => {
    //   getPokemonsJson.pokemons.unshift(
    //     {
    //       "name": pokemon.name,
    //       "description": pokemon.description,
    //       "id": pokemon.id,
    //       "types": [
    //           {
    //               "type": {
    //                 "name": pokemon.types[0],
    //               }
    //           },
    //           {
    //               "type": {
    //                   "name": pokemon.types[1],
    //               }
    //           }
    //       ],
    //       "image": pokemon.image
    //   }
    //   );
    //   return new Promise((resolve, reject) => {
    //     resolve(getPokemonsJson.pokemons)
    //   })
    // };



