import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "./slice";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5fc9346b2af77700165ae514.mockapi.io",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<ProductType[], number | void>({
        query(page = 1) {
          return `/products?page=${page}`;
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = api;
