import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { commitSortOption } from "./slice";
import { useAppDispatch } from "../app/hooks";

export const FilterSort = () => {
  const { register, watch } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (watch("option")) dispatch(commitSortOption(watch("option")));
  }, [watch("option")]);

  return (
    <div className="filter__sort">
      <span className="filter__sort-label">Sort By</span>
      <form className="filter__sort-box">
        <label>
          <input {...register("option")} value="oldToNew" type="radio" />
          Old to new
        </label>
        <label>
          <input {...register("option")} value="newToOld" type="radio" />
          New to old
        </label>
        <label>
          <input {...register("option")} value="highToLow" type="radio" />
          Price high to low
        </label>
        <label>
          <input {...register("option")} value="lowToHigh" type="radio" />
          Price low to high
        </label>
      </form>
    </div>
  );
};
