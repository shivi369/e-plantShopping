
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check whether the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {
        // Increase quantity if the item already exists
        existingItem.quantity++;
      } else {
        // Add a new item with quantity 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      // Remove the item matching the given name
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find the item to update
      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      if (itemToUpdate) {
        // Update the item's quantity
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } =
  CartSlice.actions;

// Export reducer for the Redux store
export default CartSlice.reducer;
