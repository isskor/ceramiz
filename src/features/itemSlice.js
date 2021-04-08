import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'currentItem',
  initialState: {
    currentItemIndex: null,
    currentCollection: null,
  },
  reducers: {
    setCurrentItem: (state, action) => {
      const { index, col } = action.payload;
      return { currentItemIndex: index, currentCollection: col };
    },
  },
});

export const { setCurrentItem } = itemSlice.actions;

export const selectCurrentItem = (state) => state.currentItemIndex;

export const selectNextItem = (state) => {
  if (state.currentItem.currentCollection) {
    const { items } = state.currentItem.currentCollection;
    const { currentItemIndex } = state.currentItem;

    return items[(currentItemIndex + 1) % items.length];
  }
  return;
};

export const selectPrevItem = (state) => {
  if (state.currentItem.currentCollection) {
    const { items } = state.currentItem.currentCollection;
    const { currentItemIndex } = state.currentItem;
    if (currentItemIndex === 0) return items[items.length - 1];
    return items[(currentItemIndex - 1) % items.length];
  }
  return;
};

export const selectCurrentCollection = (state) => {
  if (state.currentItem.currentCollection)
    return state.currentItem.currentCollection.path;
};

export default itemSlice.reducer;
