import { createSlice } from "@reduxjs/toolkit";
let cart = localStorage.getItem("cart");
cart = JSON.parse(cart);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cart || [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export default cartSlice.reducer;
export const { setCart } = cartSlice.actions;
