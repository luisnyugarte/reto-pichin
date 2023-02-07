/* External */
import React, { useState } from 'react';

/* Styles */
import './EditPokemonsForm.scss';

// Api
import { editPokemon } from './../../Api/Pokemons';

const EditPokemonsForm = ({id, closeModal, handleClose, updatePokemonList}) => {

const updateHandler = async (e, values) => {
  e.preventDefault();
  const parameters = {values, id};
  return await editPokemon(parameters); 
}

const handlerChangeName = (value) => {
  setName(value);
} 

const handlerChangeImage = (value) => {
  setImage(value);
} 

const handlerChangeType = (value) => {
  setType(value) ;
} 

const handlerChangeAttack = (value) => {
  setAttack(value);
} 

const handlerChangeDefense = (value) => {
  setDefense(value);
} 
const handlerChangeHp = (value) => {
  setHp(value);
} 

const [name, setName] = useState('');
const [image, setImage] = useState('');
const [type, setType] = useState('')
const [attack, setAttack] = useState('');
const [defense, setDefense] = useState('');
const [hp, setHp] = useState('');

  return (
    <form className={ "edit-pokemon__form" }>
      <h3>Edit pokemon</h3>
      <div>
                    <label 
                      className={ "create-pokemon__form--label"}
                      htmlFor="create-pokemon-name">Name</label>
                    <input 
                        className={ "create-pokemon__form--input"}
                        type="text" 
                        id="create-pokemon-name"
                        placeholder='Name'
                        name="create-pokemon-name"
                        onChange={(e) => {
                          handlerChangeName(e.target.value);
                        }}
                      />
                      <label 
                        className={ "create-pokemon__form--label"}
                        htmlFor="create-pokemon-type">Image url</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-image"
                          placeholder='image URL'
                          name="create-pokemon-image"
                          onChange={(e) => {
                            handlerChangeImage(e.target.value);
                          }}
                      />
                      <label 
                        className={ "create-pokemon__form--label"}
                        htmlFor="create-pokemon-attack">Attack</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-attack"
                          placeholder='Attack'
                          name="create-pokemon-attack"
                          onChange={(e) => {
                            handlerChangeAttack(Number(e.target.value));
                          }}
                      />
                    </div>
                   <div>
                   <label 
                        className={ "create-pokemon__form--label"}
                        htmlFor="create-pokemon-defense">Defense</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-defense"
                          placeholder='Defense'
                          name="create-pokemon-defense"
                          onChange={(e) => {
                            handlerChangeDefense(Number(e.target.value));
                          }}
                      />
                    <label 
                        className={ "create-pokemon__form--label"}
                        htmlFor="create-pokemon-type">Type</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-type"
                          placeholder='Type'
                          name="create-pokemon-type"
                          onChange={(e) => {
                            handlerChangeType(e.target.value);
                          }}
                      />
                      <label 
                        className={ "create-pokemon__form--label"}
                        htmlFor="create-pokemon-hp">HP</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-hp"
                          placeholder='HP'
                          name="create-pokemon-hp"
                          onChange={(e) => {
                            handlerChangeHp(Number(e.target.value));
                          }}
                      />
                   </div>
        <button className={ "edit-pokemon__form--button"} role="button" onClick={(e) => {
            updateHandler(e, {
              name, 
              attack,
              defense,
              type,
              image,
              hp,
              "idAuthor": 1
            });
            closeModal();
            handleClose();
            setTimeout(() => {
              updatePokemonList();
            }, 100);
        }}>Save</button>
    </form>
  );
};

export default EditPokemonsForm;
