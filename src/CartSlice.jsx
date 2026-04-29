import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name); // Check to see if
      // item already exists in the cart by comparing names
      if (existingItem) { // If statement takes care of if the item already exists in the
      // cart,increase the quantity. If it doesn't, add it to the cart with quantity of 1
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name , quantity} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name); // Same as above, check
      // for item of the exact same name in the cart
      if (itemToUpdate) { // If there is an item of the exact same name, update quantity to new value
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
