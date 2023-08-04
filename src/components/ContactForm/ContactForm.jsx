import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      event.target.reset();
      return Notiflix.Notify.warning(`${contact.name} is already in contacts`, {
        width: '500px',
        position: 'center-top',
        distance: '18px',
        svgSize: '120px',
        timeout: 3000,
        borderRadius: '3px',
        fontFamily: 'Dosis',
        fontSize: '20px',
      });
    }

    dispatch(addContact(contact));
    Notiflix.Notify.success(`${contact.name} added`, {
      width: '500px',
      position: 'center-top',
      distance: '18px',
      svgSize: '120px',
      timeout: 3000,
      borderRadius: '3px',
      fontFamily: 'Dosis',
      fontSize: '20px',
    });
    event.target.reset();
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <TextField
        type="text"
        name="name"
        pattern="^[A-Za-z.'\- ]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        label="Contact name"
      />
      <TextField
        type="tel"
        name="number"
        pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
        title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        label="Contact number"
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Stack>
  );
};
