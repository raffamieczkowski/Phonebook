import React from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div style={{ textAlign: 'center', color: '#ffcc33', background: '#000033', borderTop: '1px solid #ffcc33' }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Phonebook App - enjoy!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here you can store your contacts and easily manage them.
        </Typography>
      </div>
    </>
  );
};

export default Home;
