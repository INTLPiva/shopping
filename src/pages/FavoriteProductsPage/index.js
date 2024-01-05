import React from "react";
import Header from "../../components/Header/Header";
import Provider from "../../context/Provider";

import CartDetails from "../../components/Cart/CartDetails/CartDetails";
import FavoriteDetails from "../../components/Favorite/FavoriteDetails/FavoriteDetails";

const FavoriteProductsPage = () => {
  return (
    <Provider>
      <Header />
      <FavoriteDetails />
      <CartDetails />
    </Provider>
  );
};

export default FavoriteProductsPage;
