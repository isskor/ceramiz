import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ceramiz-db.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
