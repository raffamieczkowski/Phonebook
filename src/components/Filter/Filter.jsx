import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filtersSlice';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = event => dispatch(filterContact(event.target.value));

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <SearchIcon />
      <InputBase
        onChange={handleInputChange}
        placeholder="Find contact by name"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Stack>
  );
};
