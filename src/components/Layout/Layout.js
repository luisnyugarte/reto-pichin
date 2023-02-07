/* External */
import React, { useEffect, useState } from 'react';

// styles
import './Layout.scss'

// Components
import SearchPokemons from './../SearchPokemons'
import ListPokemons from './../ListPokemons'

// Api
import { getPokemonsApi } from "./../../Api/Pokemons";


const Layout = ({
  
}) => {

  const handleGetPokemons = async () => {
    const data = await getPokemonsApi();
    setTimeout(() => {
      setPokemonList(data.dataResponse);
    }, 50);
  };

  const filterList = (e) => {
    var text = e.target.value;
    const newData = pokemonList.filter((item) => {
        const itemDataName = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemDataName.indexOf(textData) > -1;
    })

    setSearch(newData);
  }

  const [search, setSearch] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    handleGetPokemons();
  }, []);

  return (
    <div className={ "layout" }>
      <div className={ "layout__section layout__section--search" }>
        <span className={ "layout__section--wrapper" }>
          <SearchPokemons filterList={filterList} updatePokemonList={handleGetPokemons} />
        </span>
      </div>

      <div className={ "layout__section layout__section--list" }>
        <span className={ "layout__section--wrapper" }>
          <ListPokemons 
            searchResults={search}
            pokemonList={pokemonList}
            updatePokemonList={handleGetPokemons}/>
        </span>
      </div>
    </div>
  );
};

export default Layout;