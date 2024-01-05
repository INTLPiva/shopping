import React, { useContext } from 'react';

import './CartDetails.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../../context/AppContext';
import formatCurrency from '../../../utils/formatCurrency';
import { ButtonCheckout, CartItems, CartResume } from './styles';

function CartDetails() {
  const userToken = localStorage.getItem("user_token");
  const usersStorage = localStorage.getItem("users_bd");

  const { isCartVisible } = useContext(AppContext);

  const cart = JSON.parse(localStorage.getItem("cart"));

  const totalPrice = cart?.reduce((acc, item) => item.price + acc, 0);

  function downloadObjectAsJson(exportObj, exportName) {
    if (userToken && usersStorage) {
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
    else alert("Para realizar checkout você precisa estar logado!");
  }

  return (
    <>
      <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
        <CartItems>
          {cart?.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
        </CartItems>

        <ButtonCheckout onClick={() => downloadObjectAsJson(cart, 'produtos')}>
          Checkout
        </ButtonCheckout>
        <CartResume>{formatCurrency(totalPrice, 'BRL')}</CartResume>
      </section>
    </>
  );
}

export default CartDetails;
