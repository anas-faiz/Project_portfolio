import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "./types";

const loadCartFromStorage =()=>{
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }
    },
    clearCart: (state)=>{
        state.items = []
    }
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;