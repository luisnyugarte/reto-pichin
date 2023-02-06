/* External */
import React from 'react';

/* Styles */
import './PokemonsModal.scss';

// Components
import EditPokemonForm from '../EditPokemonsForm/EditPokemonsForm'

// Others
import { FaRegWindowClose } from 'react-icons/fa';

const PokemonsModal = ({ isActive, children, handleClose, isOpen, closeModal }) => {

  return (
    <div 
      className={ "edit-modal" + (isOpen ? " show" : " hide")}
      isActive={isActive}>
        <div className={ "edit-modal__box" }>
          <span 
          className={ "edit-modal__box--close" }
          onClick=
            {() => {
              closeModal();
              handleClose()
          }}><FaRegWindowClose/></span>
         <div className={ "edit-modal__box--content" }>
            <div className={ "edit-modal__box--content-detail" }>
              { children }
            </div>
            <div className={ "edit-modal__box--content-form" }>
              <EditPokemonForm data={children.props.pokemon} />
            </div>
         </div>
        </div>
    </div>
  );
};

export default PokemonsModal;
