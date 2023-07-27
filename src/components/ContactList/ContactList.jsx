import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact } from '../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDeleteContact = async (contactId) => {
    try {
      await dispatch(deleteContact(contactId));
    } catch (error) {
      console.error('An error occurred while deleting the contact!', error);
    }
  };

  return (
    <div className={styles.listContainer}>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            <span className={styles.contactName}>
              {contact.name}: {contact.number}
            </span>
            <button className={styles.deleteButton} onClick={() => handleDeleteContact(contact.id)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
