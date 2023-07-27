import React from 'react';
import { useDispatch } from 'react-redux';
import { createContact, deleteContact } from './redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import Register from './Register/Register';
import Login from './Login/Login';
import { loginUser } from './redux/authSlice';

const App = () => {
  const dispatch = useDispatch();

  const handleLogin = async (userData) => {
    try {
      const response = await dispatch(loginUser(userData));
      localStorage.setItem('token', response.payload.token);
    } catch (error) {
      console.error('Logowanie nie powiodło się:', error);
    }
  };

  const handleAddContact = (newContact) => {
    if (!newContact.name || !newContact.number) {
      alert('Name and number are required.');
      return;
    }
    dispatch(createContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/contacts"
          element={
            <>
              <h1 className={styles.heading}>Phonebook</h1>
              <ContactForm addContact={handleAddContact} />

              <h2 className={styles.heading}>Contacts</h2>
              <Filter />
              <ContactList handleDeleteContact={handleDeleteContact} />
            </>
          }
        />
      </Routes>
      <UserMenu />
    </div>
  );
};

export default App;
