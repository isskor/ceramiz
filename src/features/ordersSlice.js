import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';

export const fetchOrder = createAsyncThunk(
  'orders/fetchOrder',
  async (payload, thunkAPI) => {
    const response = await api.get('/orders/order/' + payload.orderId);
    return response.data;
  }
);

export const fetchUserOrders = createAsyncThunk(
  'orders/fetchUserOrders',
  async (payload, thunkAPI) => {
    const response = await api.get('/orders/orders/' + payload.id);
    return response.data;
  }
);

const initialState = {
  orders: [],
  currentOrder: null,
  status: 'idle',
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.pending]: (state, action) => {
      state.status = 'pending';
    },

    [fetchOrder.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.status = 'failed';
      } else {
        const { orderInfo, orderItems } = action.payload;
        const info = orderInfo[0];
        state.currentOrder = { info, orderItems };
        state.status = 'fulfilled';
      }
    },
    [fetchOrder.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [fetchUserOrders.pending]: (state, action) => {
      state.status = 'pending';
    },

    [fetchUserOrders.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.status = 'failed';
      } else {
        state.orders = action.payload;
        state.status = 'fulfilled';
      }
    },
    [fetchUserOrders.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default ordersSlice.reducer;

export const selectUserOrders = (state) => state.orders.orders;
