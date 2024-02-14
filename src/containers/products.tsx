import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Product } from "./product";

import { ProductType, commitProducts } from "./slice";
import { useFetchProductsQuery } from "./api";

export const Products = () => {
  const dispatch = useAppDispatch();

  const itemsPerPage: number = 12;
  const products = useAppSelector((state) => state.global.products);
  const cartItems = useAppSelector((state) => state.global.cartItems);
  const cartTotalPrice = useAppSelector((state) => state.global.cartTotalPrice);
  const filteredProductsByName = useAppSelector(
    (state) => state.global.filteredProductsByName
  );
  const sortOption = useAppSelector((state) => state.global.sortOption);

  console.log(cartItems, "cartItems");
  console.log(cartTotalPrice, "cartTotalPrice");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data } = useFetchProductsQuery(currentPage);

  const paginatedData: ProductType[] | undefined = useMemo(() => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;

    if (products) return products.slice(startIndex, endIndex);
  }, [currentPage, products, itemsPerPage]);

  function sortByDateAscending(data: ProductType[]) {
    const result = data?.sort(
      (objA: ProductType, objB: ProductType) =>
        Number(objB.createdAt) - Number(objA.createdAt)
    );
    console.log(result);
    dispatch(commitProducts(result));
  }

  function sortByDateDescending(data: ProductType[]) {
    const result = data?.sort(
      (objA: ProductType, objB: ProductType) =>
        Number(objA.createdAt) - Number(objB.createdAt)
    );
    console.log(result);
    dispatch(commitProducts(result));
  }

  function sortByPriceAscending(data: ProductType[]) {
    const result = data?.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    console.log(result);
    dispatch(commitProducts(result));
  }

  function sortByPriceDescending(data: ProductType[]) {
    const result = data?.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    console.log(result);
    dispatch(commitProducts(result));
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (data) {
      const dateConvertedData = data.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt),
      }));

      switch (sortOption) {
        case "oldToNew":
          sortByDateAscending(dateConvertedData);
          break;
        case "newToOld":
          sortByDateDescending(dateConvertedData);
          break;
        case "highToLow":
          sortByPriceAscending(dateConvertedData);
          break;
        case "lowToHigh":
          sortByPriceDescending(dateConvertedData);
          break;
        default:
          dispatch(commitProducts(dateConvertedData));
          break;
      }
    }
  }, [data, sortOption]);

  useEffect(() => {
    if (products) setTotalPages(Math.ceil(products?.length / itemsPerPage));
  }, [products]);

  return (
    <div className="product-screen">
      <div className="products">
        {filteredProductsByName === undefined ||
        filteredProductsByName.length === 74
          ? paginatedData?.map((product: ProductType) => (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                price={product.price}
                name={product.name}
                description={product.description}
              />
            ))
          : filteredProductsByName.map((product: ProductType) => (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                price={product.price}
                name={product.name}
                description={product.description}
              />
            ))}
      </div>
      <div className="product-pagination">
        <ul className="pagination">
          {Array.from(
            { length: totalPages },
            (_, index: number) => index + 1
          ).map((pageNumber: number) => (
            <li
              key={pageNumber}
              className={pageNumber === currentPage ? "active" : "active"}
            >
              <button onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
