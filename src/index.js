import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { fetchContacts } from './components/contactsAPI';
import store from './components/redux/store';
import App from './components/App';
import './index.css';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(fetchContacts(token));
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
