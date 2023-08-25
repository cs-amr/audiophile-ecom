import { createSlice } from "@reduxjs/toolkit";
let cart: {
  shortName: string;
  productCount: number;
  cartImage: string;
  price: number;
  priceId: string;
}[] = [];

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
