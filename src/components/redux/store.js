import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../store/contactsSlice';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchContacts } from '../contactsAPI';

export const contactsApi = createApi({
  baseQuery: fetchContacts,
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
