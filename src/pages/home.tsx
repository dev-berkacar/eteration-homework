import { useCallback, useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import { Filter } from "../containers/filter";
import { Header } from "../containers/header";
import { Overview } from "../containers/overview";
import { Products } from "../containers/products";
import { commitProducts } from "../containers/slice";

export const Home = () => {
  const dispatch = useAppDispatch();

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      dispatch(commitProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <Header />
      <div className="content">
        <Filter />
        <Products />
        <Overview />
      </div>
    </>
  );
};
