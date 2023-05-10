import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    addFollow: state => {
      state.followers += 1;
      state.isFollower = true;
    },
    removeFollow: state => {
      state.followers -= 1;
      state.isFollower = false;
    },
    togglePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(...payload);
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addFollow, removeFollow, togglePage } = userSlice.actions;

export default userSlice.reducer;
