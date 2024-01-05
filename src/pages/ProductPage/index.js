import React from "react";
import Header from "../../components/Header/Header";
import Provider from "../../context/Provider";

import CartDetails from "../../components/Cart/CartDetails/CartDetails";
import ProductDetail from "../../components/ProductsDetails/ProductDetail/ProductDetail";

const ProductPage = () => {
  return (
    <Provider>
      <Header />
      <ProductDetail />
      <CartDetails />
    </Provider>
  );
};

export default ProductPage;
