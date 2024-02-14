import { useForm } from "react-hook-form";
import { useAppSelector } from "../app/hooks";
import { ProductType } from "./slice";
import Icon from "../components/Icon";
import { useState } from "react";

export const FilterBrands = () => {
  const { register, watch } = useForm();

  const products = useAppSelector((state) => state.global.products);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrand, setFilteredBrand] = useState<ProductType[]>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.brand.toLowerCase().includes(query)
    );
    setFilteredBrand(filtered);
  };

  // get filtered brand products
  // get filtered model products
  // concat them

  return (
    <div className="filter__brands">
      <span className="filter__brands-label">Brands</span>
      <form className="filter__brands-box">
        <div className="filter__search">
          <button className="filter__search__button">
            <div className="filter__search__icon">
              <Icon color="#999" size={16} icon="magnifying-glass" />
            </div>
          </button>
          <input
            {...register(`searchBrand`)}
            type="text"
            onChange={handleSearchInputChange}
            value={searchQuery}
            className="filter__search__input"
            placeholder="Search"
          />
        </div>
        {filteredBrand === undefined
          ? products.map((product) => (
              <label>
                <input
                  {...register(`option`)}
                  value={product.brand}
                  type="checkbox"
                />
                {product.brand}
              </label>
            ))
          : filteredBrand?.map((product) => (
              <label>
                <input
                  {...register(`option`)}
                  value={watch("option")}
                  type="checkbox"
                />
                {product.brand}
              </label>
            ))}
      </form>
    </div>
  );
};
