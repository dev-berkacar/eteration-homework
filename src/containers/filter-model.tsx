import { useForm } from "react-hook-form";
import { FilterSearch } from "../components/filter-search";

type FormTypes = {
  model1: boolean;
  model2: boolean;
  model3: boolean;
};

export const FilterModel = () => {
  const { register, handleSubmit, watch } = useForm<FormTypes>({
    defaultValues: {
      model1: false,
      model2: false,
      model3: false,
    },
  });

  const onSubmit = (data: unknown) => console.log(data);

  // Get the selected gender from the form data
  const selectedBrands = watch(["model1", "model2", "model3"]);
  console.log(selectedBrands);

  return (
    <div className="filter__model">
      <span className="filter__model-label">Model</span>
      <form className="filter__model-box" onSubmit={handleSubmit(onSubmit)}>
        <FilterSearch />
        <label>
          <input type="checkbox" {...register("model1")} />
          11
        </label>
        <label>
          <input type="checkbox" {...register("model2")} />
          12 Pro
        </label>
        <label>
          <input type="checkbox" {...register("model3")} />
          13 Pro Max
        </label>
      </form>
    </div>
  );
};
