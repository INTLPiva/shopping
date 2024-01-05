import React, { useContext } from "react";
import { Link } from "react-router-dom";

import propTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

import formatCurrency from "../../../utils/formatCurrency.js";
import AppContext from "../../../context/AppContext.js";
import {
  ButtonAddCard,
  ButtonAddFavorite,
  ButtonProduct,
  CardDescription,
  CardImage,
  CardInfo,
  CardPrice,
  CardTitle,
  ProductDescription,
} from "./styles.js";

function ProductCardDetails({ data }) {
  const userToken = localStorage.getItem("user_token");
  const usersStorage = localStorage.getItem("users_bd");

  const { title, thumbnail, price, description } = data;

  const { cartItems, setCartItems } = useContext(AppContext);
  const { favoriteItems, setFavoriteItems } = useContext(AppContext);
  const { setItem } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
    localStorage.setItem("cart", JSON.stringify([...cartItems, data]));
  };

  const handleAddProduct = () => {
    setItem(data);
    localStorage.setItem("product", JSON.stringify(data));
  };

  const handleAddCartFavorite = () => {
    if ((userToken && usersStorage)) {
      setFavoriteItems([...favoriteItems, data]);
      localStorage.setItem(
        "favorite",
        JSON.stringify([...favoriteItems, data])
      );
    } else
      alert("Para adicionar um item aos favoritos você precisa estar logado");
  };

  return (
    <ProductDescription>
      <Link to="/product">
        <ButtonProduct type="button" onClick={handleAddProduct}>
          <CardImage
            src={thumbnail?.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product"
          />
        </ButtonProduct>

        <div>
          <CardTitle>{title}</CardTitle>
          <CardInfo>
            <CardDescription>{description}</CardDescription>
            <CardPrice>{price ? formatCurrency(price, "BRL") : 0}</CardPrice>
          </CardInfo>
        </div>
      </Link>

      <ButtonAddCard type="button" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </ButtonAddCard>

      <ButtonAddFavorite
        type="button"
        ButtonAddFavorite
        onClick={handleAddCartFavorite}
      >
        <MdFavoriteBorder />
      </ButtonAddFavorite>
    </ProductDescription>
  );
}

export default ProductCardDetails;

ProductCardDetails.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
