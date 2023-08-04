import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { ContactForm } from 'components';
import { ContactList } from 'components';
import { Filter } from 'components';
import { Loader, Error } from 'components';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <div>
        <div>
          <h1>Phonebook</h1>
        </div>
        <div>
          <ContactForm />
          <Filter />
        </div>
        <div>
          {isLoading ? <Loader /> : <ContactList />}
          {error && <Error />}
        </div>
      </div>
    </div>
  );
};
export default Contacts;
