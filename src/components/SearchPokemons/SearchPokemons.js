/* External */
import React, { useState } from 'react';
import { useModalWithData } from '../../hooks/useModal';
import CreatePokemon from '../CreatePokemon';


/* Styles */
import './SearchPokemons.scss';

const SearchPokemons = ({
  filterList
}) => {
  const [setIsModalOpened, isModalOpened, modalData, setModalData] =
  useModalWithData();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className={ "search-pokemons" }>
      <form className={ "search-pokemons__form" }>
        <label 
          className={ "search-pokemons__form--label"}
          htmlFor="site-search">Search pokemon by name</label>
          <input 
            className={ "search-pokemons__form--input"}
            type="search" 
            id="search-pokemon"
            placeholder='Search Pokemons'
            name="search-pokemon"
            onChange={(text) => filterList(text)}/>
      </form>
      <div className={ "search-pokemons__create" }>
        <button className={ "search-pokemons__create--button" }
         onClick={() => {
          handleOpenModal();
          setIsModalOpened(true);
      }}>+ New Pokemon</button>
      </div>
      <CreatePokemon
        isOpen={modalIsOpen}
        closeModal={handleOpenModal}
        isActive={isModalOpened}
        handleClose={() => setIsModalOpened(false)}
      >
        <h1>hola</h1>
      </CreatePokemon>
    </div>
  );
};

export default SearchPokemons;
