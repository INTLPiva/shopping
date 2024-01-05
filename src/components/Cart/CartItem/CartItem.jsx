import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';

import { ButtonRemoveItem, Cart, CartImage, CartItemContent, CartItemPrice, CartItemTitle } from './styles';
import formatCurrency from '../../../utils/formatCurrency';
import AppContext from '../../../context/AppContext';

function CartItem({ data }) {

  const { setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const updatedItems = cartItem?.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedItems))
    setCartItems(updatedItems);
  };

  return (
    <Cart>
      <CartImage
        src={thumbnail}
        alt="imagem do produto"
      />

      <CartItemContent>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{formatCurrency(price, 'BRL')}</CartItemPrice>

        <ButtonRemoveItem
          type="button"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </ButtonRemoveItem>
      </CartItemContent>
    </Cart>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
