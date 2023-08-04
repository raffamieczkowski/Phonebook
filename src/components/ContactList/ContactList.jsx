import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedNumber, setEditedNumber] = useState('');

  const dispatch = useDispatch();

  const handleEdit = (id, name, number) => {
    setEditingContactId(id);
    setEditedName(name);
    setEditedNumber(number);
  };

  const handleSave = id => {
    const editedContact = {
      id: id,
      name: editedName,
      number: editedNumber,
    };

    dispatch(editContact(editedContact));

    Notiflix.Notify.info(`${editedName} edited`, {
      width: '500px',
      position: 'center-top',
      distance: '18px',
      svgSize: '120px',
      timeout: 3000,
      borderRadius: '3px',
      fontFamily: 'Dosis',
      fontSize: '20px',
    });

    setEditingContactId(null);
    setEditedName('');
    setEditedNumber('');
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.failure(`Contact DELETED`, {
      width: '500px',
      position: 'center-top',
      distance: '18px',
      svgSize: '120px',
      timeout: 3000,
      borderRadius: '3px',
      fontFamily: 'Dosis',
      fontSize: '20px',
    });
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {editingContactId === contact.id ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={e => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedNumber}
                onChange={e => setEditedNumber(e.target.value)}
              />
              <button type="button" onClick={() => handleSave(contact.id)}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    handleEdit(contact.id, contact.name, contact.number)
                  }
                >
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(contact.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
