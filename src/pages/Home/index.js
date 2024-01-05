import React from "react";
import Header from "../../components/Header/Header";
import Provider from "../../context/Provider";
import CartDetails from "../../components/Cart/CartDetails/CartDetails";
import Products from "../../components/Product/Products/Products";

const Home = () => {
  return (
    <Provider>
      <Header />
      <Products />
      <CartDetails />
    </Provider>
  );
};

export default Home;
