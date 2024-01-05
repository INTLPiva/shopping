import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { MdFavoriteBorder } from "react-icons/md";


import { ButtonAddCard, ButtonAddFavorite, ButtonProduct, CardImage, CardInfos, CardPrice, CardTitle, ProductCardSection } from './styles';
import AppContext from '../../../context/AppContext';
import formatCurrency from '../../../utils/formatCurrency';

function ProductCard({ data }) {
  const userToken = localStorage.getItem("user_token");
  const usersStorage = localStorage.getItem("users_bd");

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);
  const { favoriteItems, setFavoriteItems } = useContext(AppContext);
  const { setItem } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
    localStorage.setItem("cart", JSON.stringify([...cartItems, data]));
  };

  const handleAddProduct = () => {
    setItem(data)
    localStorage.setItem("product", JSON.stringify(data));
  };

  const handleAddCartFavorite = () => {
    if ((userToken && usersStorage)) {
      setFavoriteItems([...favoriteItems, data])
      localStorage.setItem("favorite", JSON.stringify([...favoriteItems, data]))
    }
    else alert("Para adicionar um item aos favoritos você precisa estar logado");
  };

  return (
    <ProductCardSection>
      <Link to="/product">

        <ButtonProduct
          type="button"
          onClick={handleAddProduct}
        >
          <CardImage
            src={thumbnail?.replace(/\w\.jpg/gi, 'W.jpg')}
            alt="product"
          />

          <CardInfos>
            <CardPrice>{price ? formatCurrency(price, 'BRL') : 0}</CardPrice>
            <CardTitle>{title}</CardTitle>
          </CardInfos>
        </ButtonProduct>
      </Link>
      <ButtonAddCard
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </ButtonAddCard>

      <ButtonAddFavorite
        type="button"
        className="button_add-favorite"
        onClick={handleAddCartFavorite}
      >
        <MdFavoriteBorder />
      </ButtonAddFavorite>
    </ProductCardSection>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
