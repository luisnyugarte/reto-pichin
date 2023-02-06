/* External */
import React, { useState } from 'react';

/* Styles */
import './CreatePokemon.scss';

// Api
import { pushPokemons } from './../../Api/Pokemons';

// Others
import { FaRegWindowClose } from 'react-icons/fa';

const CreatePokemon = ({ isActive, handleClose, isOpen, closeModal }) => {

const [name, setName] = useState('');
const [image, setImage] = useState('');
const [description, setDescription] = useState('');
const [types, setTypes] = useState('');

const createHandler = async (e, values) => {
  e.preventDefault();
  return await pushPokemons(values); 
}

const handlerChangeName = (value) => {
  setName(value);
} 

const handlerChangeDescription = (value) => {
 setDescription(value) ;
} 

const handlerChangeImage = (value) => {
  setImage(value);
} 

const handlerChangeTypes = (value) => {
  setTypes(value.split(',')) ;
} 

  return (
    <div 
      className={ "create-pokemon" + (isOpen ? " show" : " hide")}
      isActive={isActive}>
        <div className={ "create-pokemon__box" }>
          <h3>Create a new pokemon</h3>
          <span 
              className={ "create-pokemon__box--close" }
              onClick=
                {() => {
                  closeModal();
                  handleClose();
              }}><FaRegWindowClose/></span>
            <div className={ "create-pokemon__box--content" }>
              <div className={ "create-pokemon__form"}>
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
                        htmlFor="create-pokemon-types">Types separate by (,)</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-types"
                          placeholder='Types'
                          name="create-pokemon-types"
                          onChange={(e) => {
                            handlerChangeTypes(e.target.value);
                          }}
                      />
                    </div>
                   <div>
                    <label 
                        className={ "create-pokemon__form--label"}
                        htmlFor="create-pokemon-types">Image url</label>
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
                        htmlFor="create-pokemon-types">Description</label>
                      <input 
                          className={ "create-pokemon__form--input"}
                          type="text" 
                          id="create-pokemon-description"
                          placeholder='description'
                          name="create-pokemon-description"
                          onChange={(e) => {
                            handlerChangeDescription(e.target.value);
                          }}
                      />
                   </div>
              </div>
              <button className={ "create-pokemon__form--button"} role="button" 
                   onClick={(e) => {
                      createHandler(e, {
                        name, 
                        description,
                        types,
                        image
                      });
                      closeModal();
                      handleClose()
                  }}
                  >Create</button>
          </div>
        </div>
    </div>
  );
};

export default CreatePokemon;
