/* External */
import React from 'react';

/* Styles */
import './EditPokemonsDetail.scss';

const EditPokemonsDetail = ({
  pokemon
}) => {
  return (
    <>
     {
      pokemon ?
        <div className={ "pokemon-detail" }>
          <h2 className={ "pokemon-detail__name" }>{pokemon[1]}</h2>
          <img className={ "pokemon-detail__image" } src={pokemon[2]}/>
          <div className={ "pokemon-detail__types" }>
            { pokemon[3]?.map((type, i) => (
                    <span
                    className={ "list-pokemons__card--types" 
                    + (type === "grass" ? " green" : " orange")}>
                        {type}</span>
                    
                    ))
                }
          </div>
          <p>{pokemon[4]}</p>
        </div>
      : false
     } 
    </>
  );
};

export default EditPokemonsDetail;
