import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import contactsReducer from '../store/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
