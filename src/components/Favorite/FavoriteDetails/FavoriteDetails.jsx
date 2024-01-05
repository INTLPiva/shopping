import React from "react";

import { Products } from "./styles.js";
import FavoriteItem from "../FavoriteCard/FavoriteItem.jsx";

function FavoriteDetails() {
  const favorite = JSON.parse(localStorage.getItem("favorite"));

  return (
    <Products className="container">
      {favorite?.map((item) => (
        <FavoriteItem key={item.id} data={item} />
      ))}
    </Products>
  );
}

export default FavoriteDetails;
