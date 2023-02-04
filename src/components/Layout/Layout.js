/* External */
import React from 'react';

// styles
import './Layout.scss'

// Components
import SearchPokemons from './../SearchPokemons'
import ListPokemons from './../ListPokemons'


const Layout = ({
}) => {
  return (
    <div className={ "layout" }>
      <div className={ "layout__section layout__section--search" }>
        <span className={ "layout__section--wrapper" }>
          <SearchPokemons />
        </span>
      </div>

      <div className={ "layout__section layout__section--list" }>
        <span className={ "layout__section--wrapper" }>
          <ListPokemons />
        </span>
      </div>
    </div>
  );
};

export default Layout;