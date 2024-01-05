import React from "react";

import { Container } from "./styles.js";
import ProductCardDetails from "../ProductCardDetails/ProductCardDetails.jsx";

function ProductDetail() {
  const itemProduct = JSON.parse(localStorage.getItem("product"));

  return (
    <Container>
      <ProductCardDetails key={itemProduct.id} data={itemProduct} />
    </Container>
  );
}

export default ProductDetail;
