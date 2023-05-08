import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
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
  },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addFollow, removeFollow } = userSlice.actions;

export default userSlice.reducer;

// export const userSlice = createSlice({
//   name: 'users',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//     isFollower: false,
//   },
//   reducers: {
//     addFollow: (state, { payload }) => {
//       const findUser = state.items.find(user => user.id === payload);
//       findUser.followers += 1;
//       state.isFollower = true;
//     },
//     removeFollow: (state, { payload }) => {
//       const findUser = state.items.find(user => user.id === payload);
//       findUser.followers -= 1;
//       state.isFollower = false;
//     },
//   },
//   extraReducers: {
//     [fetchUsers.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchUsers.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//     },
//     [fetchUsers.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export const { addFollow, removeFollow } = userSlice.actions;

// export default userSlice.reducer;
