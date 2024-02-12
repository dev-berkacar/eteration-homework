import { useForm } from "react-hook-form";
import { FilterSearch } from "../components/filter-search";

export const FilterBrands = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      apple: false,
      samsung: false,
      huawei: false,
    },
  });

  const onSubmit = (data: unknown) => console.log(data);

  // Get the selected gender from the form data
  const selectedBrands = watch(["apple", "samsung", "huawei"]);
  console.log(selectedBrands);

  return (
    <div className="filter__brands">
      <span className="filter__brands-label">Brands</span>
      <form className="filter__brands-box" onSubmit={handleSubmit(onSubmit)}>
        <FilterSearch />
        <label>
          <input type="checkbox" {...register("apple")} />
          Apple
        </label>
        <label>
          <input type="checkbox" {...register("samsung")} />
          Samsung
        </label>
        <label>
          <input type="checkbox" {...register("huawei")} />
          Huawei
        </label>
      </form>
    </div>
  );
};
