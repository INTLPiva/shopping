import React, { useContext } from 'react';
import { IoMdCart } from "react-icons/io";

import { ButtonCart, CartStatus, Name } from './styles';
import AppContext from '../../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);


  return (
    <ButtonCart
      type="button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <IoMdCart className="icon" />
      {cartItems.length > 0 && <CartStatus>{cartItems.length}</CartStatus>}
      <Name>Carrinho</Name>
    </ButtonCart>
  );
}

export default CartButton;
