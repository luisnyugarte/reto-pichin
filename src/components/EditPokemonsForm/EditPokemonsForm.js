/* External */
import React, { useState } from 'react';

/* Styles */
import './EditPokemonsForm.scss';

// Api
import { editPokemons } from './../../Api/Pokemons';

const EditPokemonsForm = ({data}) => {

const updateHandler = async (e, values) => {
  e.preventDefault();
  const pokemonId = data[0];
  const parameters = {values, pokemonId};
  return await editPokemons(parameters); 
}

const handlerChangeName = (value) => {
   setName(value !== '' ? value : data[1]);
} 

const handlerChangeDescription = (value) => {
  setDescription(value !== '' ? value : data[4]) ;
} 

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form className={ "edit-pokemon__form" }>
      <h3>Edit pokemon</h3>
        <div>
            <label 
            className={ "edit-pokemon__form--label"}
            htmlFor="edit-pokemon">Name</label>
            <input 
                className={ "edit-pokemon__form--input"}
                type="text" 
                id="edit-pokemon"
                placeholder='Edit Name'
                name="edit-pokemon"
                onChange={(e) => {
                  handlerChangeName(e.target.value);
              }}/>
        </div>
        <div>
            <label 
            className={ "edit-pokemon__form--label"}
            htmlFor="edit-pokemon">Description</label>
            <input 
                className={ "edit-pokemon__form--input"}
                type="text" 
                id="edit-pokemon"
                placeholder='Edit Description'
                name="edit-pokemon" 
                onChange={(e) => {
                  handlerChangeDescription(e.target.value);
              }}/>
        </div>
        <button className={ "edit-pokemon__form--button"} role="button" onClick={(e) => {
            updateHandler(e, {
              name, description
            });
        }}>Save</button>
    </form>
  );
};

export default EditPokemonsForm;
