/* External */
import React, { useState } from 'react';

// styles
import './Layout.scss'

// Mocks 
import getPokemonsJson from './../../mocks/pokemons.json'

// Components
import SearchPokemons from './../SearchPokemons'
import ListPokemons from './../ListPokemons'


const Layout = ({
}) => {
  const filterList = (e) => {
    var text = e.target.value;
    const data = getPokemonsJson.pokemons;
    const newData = data.filter((item) => {
        const itemDataName = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemDataName.indexOf(textData) > -1;
    })
    setSearch(newData);
  }

  const [search, setSearch] = useState('');

  return (
    <div className={ "layout" }>
      <div className={ "layout__section layout__section--search" }>
        <span className={ "layout__section--wrapper" }>
          <SearchPokemons filterList={filterList} />
        </span>
      </div>

      <div className={ "layout__section layout__section--list" }>
        <span className={ "layout__section--wrapper" }>
          <ListPokemons searchResults={search}/>
        </span>
      </div>
    </div>
  );
};

export default Layout;