import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    throw new Error('`Failed to fetch the list of contacts`.');
  }
};
