import { FilterBrands } from "./filter-brands";
import { FilterModel } from "./filter-model";
import { FilterSort } from "./filter-sort";

export const Filter = () => {
  return (
    <div className="filter">
      <FilterSort />
      <FilterBrands />
      <FilterModel />
    </div>
  );
};
