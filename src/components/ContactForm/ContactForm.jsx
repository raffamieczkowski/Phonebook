import React, { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert('Name and phone number are required.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="number">Phone number:</label>
          <input
            type="tel"
            id="number"
            placeholder="Phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
