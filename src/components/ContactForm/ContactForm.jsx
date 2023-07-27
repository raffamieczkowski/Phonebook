import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../redux/contactsSlice';
import { nanoid } from 'nanoid/non-secure';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Imię i numer telefonu są wymagane.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    // dispatch(createContact(newContact)); // Nie potrzebujemy tego, ponieważ używamy funkcji przekazanej jako props
    addContact(newContact); // Wywołujemy funkcję przekazaną jako props z nowym kontaktem
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
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="number">Numer telefonu:</label>
          <input
            type="tel"
            id="number"
            placeholder="Numer telefonu"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Dodaj kontakt
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
