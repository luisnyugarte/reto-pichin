/* External */
import React from 'react';

/* Styles */
import './ListPokemonsCard.scss';

// Others
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ListPokemonsCard = ({
    key='',
    name = '',
    src = '',
    types = [],
    customClass = '',
  }) => {
    return (
        <li className={ customClass } key={key}>
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
                <FaEdit/>
                <FaTrash/>
            </div>
        </li>
    );
  };

export default ListPokemonsCard;
