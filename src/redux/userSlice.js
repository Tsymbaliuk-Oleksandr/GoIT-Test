import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  followers: 100500,
  isFollower: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
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
});

export const { addFollow, removeFollow } = userSlice.actions;

export default userSlice.reducer;
