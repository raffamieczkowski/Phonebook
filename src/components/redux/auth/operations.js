import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {

});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {

});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {

});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {

});

export { setAuthHeader, clearAuthHeader };
