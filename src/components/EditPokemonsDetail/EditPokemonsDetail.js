/* External */
import React, { useEffect, useState } from 'react';

/* Styles */
import './EditPokemonsDetail.scss';

// Api
import { getPokemonsById } from "./../../Api/Pokemons";

const EditPokemonsDetail = ({
  id
}) => {
  const handleGetPokemonById = async () => {
    if(id) {
      const data = await getPokemonsById(id);
      setPokemon(data.dataResponse)
    }
  };

  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    handleGetPokemonById();
  }, [id]);

  return (
    <>
     {
      pokemon ?
        <div className={ "pokemon-detail" }>
          <h2 className={ "pokemon-detail__name" }>{pokemon.name}</h2>
          <img className={ "pokemon-detail__image" } src={pokemon.image}/>
          <div className={ "pokemon-detail__types" }>
            <span className={ "list-pokemons__card--types orange"}>Type: {pokemon.type}</span>
              <span className={ "list-pokemons__card--types green"}>Attack {pokemon.attack}</span>
              <span className={ "list-pokemons__card--types purple"}>Defense {pokemon.defense}</span>
          </div>

        </div>
      : false
     } 
    </>
  );
};

export default EditPokemonsDetail;
