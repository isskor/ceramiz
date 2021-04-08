import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import appSlice from '../features/appSlice';
import cartSlice from '../features/cartSlice';
// import collectionSlice from '../features/collectionsSlice';
import itemSlice from '../features/itemSlice';
import userSlice from '../features/userSlice';
import checkoutSlice from '../features/checkoutSlice';
import ordersSlice from '../features/ordersSlice';

const reducers = combineReducers({
  // collection: collectionSlice,
  cart: cartSlice,
  currentItem: itemSlice,
  app: appSlice,
  user: userSlice,
  checkout: checkoutSlice,
  orders: ordersSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
