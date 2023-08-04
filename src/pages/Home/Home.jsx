import React from 'react';
import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Welcome to the Phonebook App!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Here you can store your contacts and easily manage them.
      </Typography>
    </div>
  );
};

export default Home;
