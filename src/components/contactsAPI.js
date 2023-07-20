import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/api';

export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};
