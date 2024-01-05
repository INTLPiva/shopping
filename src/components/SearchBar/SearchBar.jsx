import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import AppContext from "../../context/AppContext";
import { SearchBarForm, SearchBarInput, SearchButton } from "./styles";

function SearchBar() {
  const { products, setProducts, setLoading } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    if (searchValue) {
      event.preventDefault();
      setLoading(true);

      const product = await products
        ?.map((item) => item)
        .filter((nome) =>
          nome?.title?.toLowerCase()?.includes(searchValue?.toLowerCase())
        );

      setProducts(product);
      setLoading(false);
      setSearchValue("");
    } else {
      window.location.reload();
    }
  };

  return (
    <SearchBarForm onSubmit={handleSearch}>
      <SearchBarInput
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={({ target }) => setSearchValue(target.value)}
      />

      <SearchButton>
        <BsSearch />
      </SearchButton>
    </SearchBarForm>
  );
}

export default SearchBar;
