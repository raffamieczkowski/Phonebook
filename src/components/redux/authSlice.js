import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://connections-api.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
  const response = await axiosInstance.post('/users/login', userData);
  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axiosInstance.post('/users/register', userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle', error: null },
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
