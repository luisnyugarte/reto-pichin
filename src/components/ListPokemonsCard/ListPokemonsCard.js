/* External */
import React from 'react';

/* Styles */
import './ListPokemonsCard.scss';

// Others
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ListPokemonsCard = ({
    id = '',
    name = '',
    src = '',
    types = [],
    description = '',
    customClass = '',
    setModalData, 
    setIsModalOpened,
    onAction,
    deletePokemon
  }) => {

    return (
        <li className={ customClass } key={id}>
            <img className={ "list-pokemons__card--image" } src={src}/>
            <h3 className={ "list-pokemons__card--name" }>{name}</h3>
            <div className={ "list-pokemons__card--types" }>
                { types?.map((type, i) => (
                    <span
                    className={ "list-pokemons__card--types" 
                    + (type === "grass" ? " green" : " orange")}>
                        {type}</span>
                    
                    ))
                }
            </div>
            <div className={ "list-pokemons__card--actions" }>
                <FaEdit 
                    onClick={() => {
                    onAction();
                    setModalData([
                        id,
                        name,
                        src,
                        types,
                        description,
                    ]);
                    setIsModalOpened(true);
                }}/>
                <FaTrash onClick={() => {
                    deletePokemon(id);
                }}/>
            </div>
        </li>
    );
  };

export default ListPokemonsCard;
