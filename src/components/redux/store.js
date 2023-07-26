import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import contactsReducer from '../store/contactsSlice';
import authReducer from '../redux/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
