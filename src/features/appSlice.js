import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { api } from '../api/api';

export const fetchShop = createAsyncThunk(
  'app/fetchShop',
  async (_, thunkAPI) => {
    const response = await api.get('products/all');

    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState: { shop: [], loading: 'idle' },
  reducers: {},
  extraReducers: {
    [fetchShop.pending]: (state, action) => {
      state.loading = 'loading';
    },

    [fetchShop.fulfilled]: (state, action) => {
      state.shop = action.payload;
      state.loading = 'fulfilled';
    },
    [fetchShop.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default appSlice.reducer;

export const selectCollections = (state) =>
  state.app.shop.map((collection) => collection);

export const selectAllItems = (state) => {
  let items = [];
  state.app.shop.map((collection) => (items = [...items, ...collection.items]));
  return items;
};

export const selectCollection = (urlLocation) =>
  createSelector(
    selectCollections,
    (shop) => shop.filter((list) => list.path === urlLocation)[0]
  );

export const selectLoadingStatus = (state) => state.app.loading;
