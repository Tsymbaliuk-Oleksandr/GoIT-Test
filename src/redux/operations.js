import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://644a7bec79279846dce9fa0f.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('task');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
