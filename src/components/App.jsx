import React from 'react';
import { useDispatch } from 'react-redux';
import { createContact, deleteContact } from './store/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import Register from './Register/Register';
import Login from './Login/Login';

const App = () => {
  const dispatch = useDispatch();

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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contacts">
          <h1 className={styles.heading}>Phonebook</h1>
          <ContactForm addContact={handleAddContact} />

          <h2 className={styles.heading}>Contacts</h2>
          <Filter />
          <ContactList handleDeleteContact={handleDeleteContact} />
        </Route>
        <Route path="/">
          <UserMenu />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
