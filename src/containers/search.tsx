import Icon from "../components/Icon";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ProductType, commitFilteredProductsByName } from "./slice";
import { useEffect, useState } from "react";

export const Search = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.global.products);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState<ProductType[]>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProduct(filtered);
  };

  useEffect(() => {
    dispatch(commitFilteredProductsByName(filteredProduct as ProductType[]));
  }, [filteredProduct, dispatch]);

  return (
    <form action="#" className="search">
      <button className="search__button">
        <div className="search__icon">
          <Icon color="#999" size={24} icon="magnifying-glass" />
        </div>
      </button>
      <input
        type="text"
        onChange={handleSearchInputChange}
        value={searchQuery}
        className="search__input"
        placeholder="Search"
      />
    </form>
  );
};
