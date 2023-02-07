/* External */
import React from 'react';

/* Styles */
import './ListPokemonsCard.scss';

// Api
import { deletePokemon } from "./../../Api/Pokemons";

// Others
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ListPokemonsCard = ({
    id = '',
    name = '',
    src = '',
    type = '',
    attack = '',
    defense = '',
    customClass = '',
    setModalData, 
    setIsModalOpened,
    onAction,
    updatePokemonList
  }) => {

    const handleDelete = async (id) => {
        await deletePokemon(id);
    };

    return (
        <li className={ customClass } key={id}>
            <img className={ "list-pokemons__card--image" } src={src}/>
            <h3 className={ "list-pokemons__card--name" }>{name}</h3>
            <div className={ "list-pokemons__card--types" }>
                <span className={ "list-pokemons__card--types orange"}>Type: {type}</span>
                <span className={ "list-pokemons__card--types green"}>Attack {attack}</span>
                <span className={ "list-pokemons__card--types purple"}>Defense {defense}</span>
                
            </div>
            <div className={ "list-pokemons__card--actions" }>
                <FaEdit 
                    onClick={() => {
                    onAction();
                    setModalData(id);
                    setIsModalOpened(true);
                }}/>
                <FaTrash onClick={() => {
                    handleDelete(id);
                    setTimeout(() => {
                        updatePokemonList();
                      }, 100);
                }}/>
            </div>
        </li>
    );
  };

export default ListPokemonsCard;
