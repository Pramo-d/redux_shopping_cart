import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingitem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingitem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalPrice = existingitem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
