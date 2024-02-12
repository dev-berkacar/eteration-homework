import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductType = {
  id: string;
  name: string;
  brand: string;
  createdAt: string;
  description: string;
  image: string;
  model: string;
  price: string;
};

type InitialStateType = {
  products: ProductType[];
};

const initialState: InitialStateType = {
  products: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    commitProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
  },
});

export const { commitProducts } = globalSlice.actions;
export default globalSlice.reducer;
