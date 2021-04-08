import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';

export const addOrder = createAsyncThunk(
  'checkout/addOrder',
  async (payload, thunkAPI) => {
    const response = await api.post('/orders/add', {
      info: payload.info,
      cart: payload.cart,
    });
    return response.data;
  }
);

const initialState = {
  status: 'idle',
  error: null,
  purchaseId: null,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    resetCheckout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    [addOrder.pending]: (state, action) => {
      state.status = 'pending';
    },
    [addOrder.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
        state.status = 'failed';
      } else {
        state.error = null;
        state.status = 'fulfilled';
        state.purchaseId = action.payload[0];
      }
    },
    [addOrder.rejected]: (state, action) => {
      state.error = action.payload.message;
      state.status = 'failed';
    },
  },
});

export const { resetCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
