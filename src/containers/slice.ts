import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductType = {
  id: string;
  name: string;
  brand: string;
  createdAt: Date;
  description: string;
  image: string;
  model: string;
  price: string;
  quantity: number;
};

type InitialStateType = {
  products: ProductType[];
  filteredProductsByName: ProductType[];
  cartItems: ProductType[];
  sortOption: string;
  cartTotalPrice: number;
};

const initialState: InitialStateType = {
  products: [],
  filteredProductsByName: [],
  cartItems: [],
  sortOption: "",
  cartTotalPrice: 0,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    commitProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    commitFilteredProductsByName(state, action: PayloadAction<ProductType[]>) {
      state.filteredProductsByName = action.payload;
    },
    commitSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
    // commitCartItems(
    //   state,
    //   action: PayloadAction<{
    //     type: "add" | "delete";
    //     payload: Partial<ProductType> | string;
    //   }>
    // ) {
    //   const { type, payload } = action.payload;
    //   if (type === "add") {
    //     const existingItemIndex = state.cartItems.findIndex(
    //       (item) => item.id === (payload as ProductType).id
    //     );
    //     if (existingItemIndex !== -1) {
    //       state.cartItems[existingItemIndex].quantity++;
    //     } else {
    //       state.cartItems.push({ ...(payload as ProductType), quantity: 1 });
    //     }
    //   } else if (type === "delete") {
    //     const existingItemIndex = state.cartItems.findIndex(
    //       (item) => item.id === payload
    //     );
    //     if (existingItemIndex !== -1) {
    //       if (state.cartItems[existingItemIndex].quantity > 1) {
    //         state.cartItems[existingItemIndex].quantity--;
    //       } else {
    //         state.cartItems.splice(existingItemIndex, 1);
    //       }
    //     }
    //   }

    //   state.cartTotalPrice = state.cartItems.reduce((total, item) => {
    //     return total + parseFloat(item.price) * item.quantity;
    //   }, 0);
    // },
    commitCartItems(
      state,
      action: PayloadAction<{
        type: "add" | "delete";
        payload: Partial<ProductType> | string;
      }>
    ) {
      const { type, payload } = action.payload;
      if (type === "add") {
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === (payload as ProductType).id
        );
        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex].quantity++;
        } else {
          state.cartItems.push({ ...(payload as ProductType), quantity: 1 });
        }
      } else if (type === "delete") {
        const existingItemIndex = state.cartItems.findIndex(
          (item) => item.id === payload
        );
        if (existingItemIndex !== -1) {
          if (state.cartItems[existingItemIndex].quantity > 1) {
            state.cartItems[existingItemIndex].quantity--;
          } else {
            state.cartItems.splice(existingItemIndex, 1);
          }
        }
      }

      // Calculate total price
      state.cartTotalPrice = state.cartItems.reduce((total, item) => {
        // Multiply the price of each item by its quantity and add it to the total
        return total + parseFloat(item.price) * item.quantity;
      }, 0);

      // Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalPrice", state.cartTotalPrice.toString());
    },

    loadCartFromLocalStorage(state) {
      // Load cartItems from localStorage
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        state.cartItems = JSON.parse(storedCartItems);
      }

      // Load cartTotalPrice from localStorage
      const storedCartTotalPrice = localStorage.getItem("cartTotalPrice");
      if (storedCartTotalPrice) {
        state.cartTotalPrice = parseFloat(storedCartTotalPrice);
      }
    },
  },
});

export const {
  commitProducts,
  commitSortOption,
  commitFilteredProductsByName,
  commitCartItems,
  loadCartFromLocalStorage,
} = globalSlice.actions;
export default globalSlice.reducer;
