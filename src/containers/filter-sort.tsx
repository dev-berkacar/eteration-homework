import { useForm } from "react-hook-form";

export const FilterSort = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: unknown) => console.log(data);

  // Get the selected gender from the form data
  //   const selectedOption = watch("sortBy");

  return (
    <div className="filter__sort">
      <span className="filter__sort-label">Sort By</span>
      <form className="filter__sort-box" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input type="radio" value="Old to new" {...register("sortBy")} />
          Old to new
        </label>
        <label>
          <input type="radio" value="New to old" {...register("sortBy")} />
          New to old
        </label>
        <label>
          <input
            type="radio"
            value="Price high to low"
            {...register("sortBy")}
          />
          Price high to low
        </label>
        <label>
          <input
            type="radio"
            value="Price low to high"
            {...register("sortBy")}
          />
          Price low to high
        </label>
        {/* {selectedOption && <p>Selected Gender: {selectedOption}</p>} */}
      </form>
    </div>
  );
};
