import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsApi } from '../redux/store';
import { nanoid } from 'nanoid/non-secure';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Name and number are required.');
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(contactsApi.endpoints.addContact.mutation(newContact));
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="number">Numer:</label>
          <input
            type="tel"
            id="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
