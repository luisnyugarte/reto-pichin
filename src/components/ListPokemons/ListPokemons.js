/* External */
import React, { useEffect, useState } from "react";

// Components
import ListPokemonsCard from "./../ListPokemonsCard";
import PokemonModal from "./../PokemonsModal";
import PokemonDetail from "./../EditPokemonsDetail";

/* Styles */
import "./ListPokemons.scss";

// Hooks
import { useModalWithData } from "../../hooks/useModal";

// Api
import { getPokemons, deletePokemons } from "./../../Api/Pokemons";

const ListPokemons = ({searchResults}) => {

  const handleGetPokemons = async () => {
    const data = await getPokemons();
    setDataList(searchResults ? searchResults : data.pokemons);
    setItems(
      searchResults ? searchResults
      : [...data.pokemons].splice(0, itemsPerPage)
    );
  };

  const [setIsModalOpened, isModalOpened, modalData, setModalData] =
    useModalWithData();
  const itemsPerPage = 3;
  const [dataList, setDataList] = useState(searchResults ? searchResults : []);
  const [items, setItems] = useState(searchResults ? searchResults : [], 3);
  const [currentPage, setCurentPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  
  const handleDelete = async (id) => {
    const newList = await deletePokemons(id);

    setDataList(newList);
    setTimeout(() => {
      setItems([...newList].splice(0, itemsPerPage));
    }, 50);
  };

  const nextHandler = () => {
    const totalElements = dataList.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex >= totalElements) return;
    setItems([...dataList].splice(firstIndex, itemsPerPage));
    setCurentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * itemsPerPage;
    setItems([...dataList].splice(firstIndex, itemsPerPage));
    setCurentPage(prevPage);
  };

  const list = items?.map((item, index) => {
    const types = item.types?.map((type, i) => {
      return type?.type.name;
    });
    return (
      <ListPokemonsCard
        id={item.id}
        src={item.image}
        name={item.name}
        description={item.description}
        types={types}
        customClass={"list-pokemons__card"}
        setModalData={setModalData}
        setIsModalOpened={setIsModalOpened}
        onAction={handleOpenModal}
        deletePokemon={handleDelete}
      />
    );
  });

  useEffect(() => {
    handleGetPokemons();
  }, [searchResults]);

  return (
    <div className={"list-pokemons"}>
      <h2 className={"list-pokemons__title"}>Pokemons</h2>
      <ul className={"list-pokemons__results"}>{list}</ul>
      <div className={"list-pokemons__paginator"}>
        <button
          className={"list-pokemons__paginator--button"}
          onClick={prevHandler}
        >
          Prev
        </button>
        <button
          className={"list-pokemons__paginator--button"}
          onClick={nextHandler}
        >
          Next
        </button>
      </div>

      <PokemonModal
        isOpen={modalIsOpen}
        closeModal={handleOpenModal}
        isActive={isModalOpened}
        handleClose={() => setIsModalOpened(false)}
      >
        <PokemonDetail pokemon={modalData} />
      </PokemonModal>
    </div>
  );
};

export default ListPokemons;
