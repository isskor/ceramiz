import {
  createSlice,
  createAsyncThunk,
  createDraftSafeSelector,
} from '@reduxjs/toolkit';
import { api } from '../api/api';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (payload, thunkAPI) => {
    const response = await api.post('/users/login', {
      email: payload.email,
      password: payload.password,
    });
    return response.data;
  }
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async (payload, thunkAPI) => {
    const response = await api.post('/users/register', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (payload, thunkAPI) => {
    const response = await api.put('/users/update', {
      id: payload.id,
      updateInfo: payload.userInfo,
    });
    return response.data;
  }
);

const initialState = {
  status: 'idle',
  error: null,
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSuccess: (state, action) => {
      return (state = action.payload);
    },
    userLogout: (state, action) => {
      return initialState;
    },
    setUserStatusIdle: (state, action) => {
      state.status = 'idle';
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchUser.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
        state.status = 'failed';
      } else {
        state.currentUser = action.payload[0];
        state.error = null;
        state.status = 'fulfilled';
      }
    },
    [fetchUser.rejected]: (state, action) => {
      state.error = action.payload.message;
      state.status = 'failed';
    },
    [createUser.pending]: (state, action) => {
      state.status = 'pending';
    },
    [createUser.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
        state.status = 'failed';
      } else {
        state.error = null;
        state.status = 'registered';
      }
    },
    [createUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.message;
    },
    [updateUser.pending]: (state, action) => {
      state.status = 'pending';
    },
    [updateUser.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.error = action.payload.message;
        state.status = 'failed';
      } else {
        state.error = null;
        state.status = 'updated';
        state.currentUser = action.payload;
      }
    },
    [updateUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.message;
    },
  },
});

export const { userLogout, setUserStatusIdle } = userSlice.actions;

export default userSlice.reducer;

export const selectUserStatus = (state) => state;
export const selectUserError = (state) => state;
export const selectCurrentUser = (state) => state.user.currentUser;

export const draftUserStatusSelector = createDraftSafeSelector(
  selectUserStatus,
  (state) => state.user.status
);

export const draftUserErrorSelector = createDraftSafeSelector(
  selectUserError,
  (state) => state.user.error
);
