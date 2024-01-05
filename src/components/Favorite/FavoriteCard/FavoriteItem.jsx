import React, { useContext } from "react";
import { Link } from "react-router-dom";

import propTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

import {
  ButtonAddCard,
  ButtonAddFavorite,
  ButtonProduct,
  CardImage,
  CardInfos,
  CardPrice,
  CardTitle,
  ProductCard,
} from "./styles.js";
import AppContext from "../../../context/AppContext.js";
import formatCurrency from "../../../utils/formatCurrency.js";

function FavoriteItem({ data }) {
  const { title, thumbnail, price, id } = data;

  const { cartItems, setCartItems } = useContext(AppContext);
  const { setItem } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  const handleAddProduct = () => {
    setItem(data);
    localStorage.setItem("product", JSON.stringify(data));
  };

  const handleRemoveItem = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));
    const updatedItems = favoriteItems?.filter((item) => item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(updatedItems));
    window.location.reload();
  };

  return (
    <ProductCard>
      <Link to="/product">
        <ButtonProduct onClick={handleAddProduct}>
          <CardImage
            src={thumbnail?.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product"
          />

          <CardInfos>
            <CardPrice>{price ? formatCurrency(price, "BRL") : 0}</CardPrice>
            <CardTitle>{title}</CardTitle>
          </CardInfos>
        </ButtonProduct>
      </Link>
      <ButtonAddCard onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </ButtonAddCard>

      <ButtonAddFavorite onClick={handleRemoveItem}>
        <MdFavorite />
      </ButtonAddFavorite>
    </ProductCard>
  );
}

export default FavoriteItem;

FavoriteItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
