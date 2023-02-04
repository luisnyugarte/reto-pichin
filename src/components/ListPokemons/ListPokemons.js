/* External */
import React, { useState } from 'react';

// Components
import ListPokemonsCard from './../ListPokemonsCard'
/* Styles */
import './ListPokemons.scss';

const ListPokemons = ({}) => {

  const data =  [
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "id": 1,
        types: [
          {
              "slot": 1,
              "type": {
                  "name": "grass",
                  "url": "https://pokeapi.co/api/v2/type/12/"
              }
          },
          {
              "slot": 2,
              "type": {
                  "name": "poison",
                  "url": "https://pokeapi.co/api/v2/type/4/"
              }
          }
      ],
      "image": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/"
    },
    {
        "name": "spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/"
    },
    {
        "name": "fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/"
    },
    {
        "name": "ekans",
        "url": "https://pokeapi.co/api/v2/pokemon/23/"
    },
    {
        "name": "arbok",
        "url": "https://pokeapi.co/api/v2/pokemon/24/"
    },
    {
        "name": "pikachu",
        "url": "https://pokeapi.co/api/v2/pokemon/25/"
    },
    {
        "name": "raichu",
        "url": "https://pokeapi.co/api/v2/pokemon/26/"
    },
    {
        "name": "sandshrew",
        "url": "https://pokeapi.co/api/v2/pokemon/27/"
    },
    {
        "name": "sandslash",
        "url": "https://pokeapi.co/api/v2/pokemon/28/"
    },
    {
        "name": "nidoran-f",
        "url": "https://pokeapi.co/api/v2/pokemon/29/"
    },
    {
        "name": "nidorina",
        "url": "https://pokeapi.co/api/v2/pokemon/30/"
    },
    {
        "name": "nidoqueen",
        "url": "https://pokeapi.co/api/v2/pokemon/31/"
    },
    {
        "name": "nidoran-m",
        "url": "https://pokeapi.co/api/v2/pokemon/32/"
    },
    {
        "name": "nidorino",
        "url": "https://pokeapi.co/api/v2/pokemon/33/"
    },
    {
        "name": "nidoking",
        "url": "https://pokeapi.co/api/v2/pokemon/34/"
    },
    {
        "name": "clefairy",
        "url": "https://pokeapi.co/api/v2/pokemon/35/"
    },
    {
        "name": "clefable",
        "url": "https://pokeapi.co/api/v2/pokemon/36/"
    },
    {
        "name": "vulpix",
        "url": "https://pokeapi.co/api/v2/pokemon/37/"
    },
    {
        "name": "ninetales",
        "url": "https://pokeapi.co/api/v2/pokemon/38/"
    },
    {
        "name": "jigglypuff",
        "url": "https://pokeapi.co/api/v2/pokemon/39/"
    },
    {
        "name": "wigglytuff",
        "url": "https://pokeapi.co/api/v2/pokemon/40/"
    }
  ]

  const itemsPerPage = 9;

  const [dataList, setDataList] = useState(data); 
  const [items, setItems] = useState([...data].splice(0, itemsPerPage)); 
  const [currentPage, setCurentPage] = useState(0); 

  
  const nextHandler = () => {
    const totalElements = dataList.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPerPage;

    if(firstIndex >= totalElements) return;
    setItems([...dataList].splice(firstIndex, itemsPerPage))
    setCurentPage(nextPage)

  }
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if(prevPage < 0) return;
    const firstIndex = prevPage * itemsPerPage;
    setItems([...dataList].splice(firstIndex, itemsPerPage))
    setCurentPage(prevPage)
  }



  const list = items?.map((item, index) => {
    const types = item.types?.map((type, i) => {
      return type?.type.name;
   })
      return <ListPokemonsCard
      key={index}
      src={item.image}
      name={item.name}
      types={types}
      customClass={'list-pokemons__card'}
    />
  })

  return (
    <div className={ "list-pokemons" }>
      <h2 className={ "list-pokemons__title" }>
        Pokemons
      </h2>
      <ul className={ "list-pokemons__results" }>
        {list}
      </ul>
      <div className={ "list-pokemons__paginator" }>
        <button 
          className={ "list-pokemons__paginator--button"}
          onClick={prevHandler}>Prev</button>
        <button 
          className={ "list-pokemons__paginator--button"}
          onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default ListPokemons;
