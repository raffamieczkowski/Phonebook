import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const contactListStyles = {
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '20px',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginRight: '10px',
    color: '#ffcc33',
  },
  contactNumber: {
    fontSize: '16px',
    marginRight: '10px',
  },
  editForm: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  editInput: {
    marginRight: '10px',
  },
  editButton: {
    marginLeft: '10px',
  },
};

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
    <ul style={contactListStyles.list}>
      {contacts.map(contact => (
        <li key={contact.id} style={contactListStyles.listItem}>
          {editingContactId === contact.id ? (
            <form style={contactListStyles.editForm}>
              <TextField
                type="text"
                value={editedName}
                onChange={e => setEditedName(e.target.value)}
                style={contactListStyles.editInput}
              />
              <TextField
                type="text"
                value={editedNumber}
                onChange={e => setEditedNumber(e.target.value)}
                style={contactListStyles.editInput}
              />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSave(contact.id)}
                >
                  Save
                </Button>
              </Stack>
            </form>
          ) : (
            <div style={contactListStyles.contactInfo}>
              <Typography style={contactListStyles.contactName}>
                {contact.name}
              </Typography>
              <Typography style={contactListStyles.contactNumber}>
                {contact.number}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() =>
                    handleEdit(contact.id, contact.name, contact.number)
                  }
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(contact.id)}
                  style={contactListStyles.editButton}
                >
                  Delete
                </Button>
              </Stack>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
