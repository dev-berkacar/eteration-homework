import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Icon from "../components/Icon";
import { ProductType, commitFilteredModels } from "./slice";
import { useState, useEffect } from "react";

export const FilterModel = () => {
  const dispatch = useAppDispatch();
  const { register } = useForm();

  const products = useAppSelector((state) => state.global.products);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredModel, setFilteredModel] = useState<ProductType[]>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.model.toLowerCase().includes(query)
    );
    setFilteredModel(filtered);
  };

  useEffect(() => {
    if (filteredModel) dispatch(commitFilteredModels(filteredModel));
  }, [filteredModel]);

  return (
    <div className="filter__model">
      <span className="filter__model-label">Model</span>
      <form className="filter__model-box">
        <div className="filter__search">
          <button className="filter__search__button">
            <div className="filter__search__icon">
              <Icon color="#999" size={16} icon="magnifying-glass" />
            </div>
          </button>
          <input
            {...register(`searchModel`)}
            type="text"
            onChange={handleSearchInputChange}
            value={searchQuery}
            className="filter__search__input"
            placeholder="Search"
          />
        </div>
        {filteredModel === undefined
          ? products.map((product) => (
              <label>
                <input
                  {...register(`option`)}
                  value={product.model}
                  type="checkbox"
                />
                {product.model}
              </label>
            ))
          : filteredModel?.map((product) => (
              <label>
                <input
                  {...register(`option`)}
                  value={product.model}
                  type="checkbox"
                />
                {product.model}
              </label>
            ))}
      </form>
    </div>
  );
};
