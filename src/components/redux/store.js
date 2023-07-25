import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Dodajemy import thunk
import contactsReducer from '../store/contactsSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchContacts } from '../contactsAPI';

export const contactsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/api' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => fetchContacts(),
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, contactsApi.middleware),
});

export default store;
