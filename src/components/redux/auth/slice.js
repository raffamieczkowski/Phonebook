import { createSlice } from '@reduxjs/toolkit';
import { logOut, logIn } from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
