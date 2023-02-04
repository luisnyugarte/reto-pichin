/* External */
import React from 'react';

/* Styles */
import './SearchPokemons.scss';

const SearchPokemons = ({
}) => {
  return (
    <div className={ "search-pokemons" }>
      <form className={ "search-pokemons__form" }>
        <label 
          className={ "search-pokemons__form--label"}
          htmlFor="site-search">Search pokemon by name or number</label>
          <input 
            className={ "search-pokemons__form--input"}
            type="search" 
            id="search-pokemon"
            placeholder='Search Pokemons'
            name="search-pokemon"/>
      </form>
      <div className={ "search-pokemons__create" }>
        <button className={ "search-pokemons__create--button" }>+ New Pokemon</button>
      </div>
    </div>
  );
};

export default SearchPokemons;
