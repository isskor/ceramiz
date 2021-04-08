import { createSlice } from '@reduxjs/toolkit';

const addItemToCart = (cartItems, cartItemToAdd, quantityToAdd = 1) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: quantityToAdd }];
};

const decreaseItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;

      return addItemToCart(state, product, quantity);
    },

    decreaseFromCart: (state, action) => {
      return decreaseItemFromCart(state, action.payload);
    },

    removeItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  decreaseFromCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;
export const selectSubTotal = (state) =>
  state.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

export default cartSlice.reducer;
