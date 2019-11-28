import axios from 'axios';

const api = axios.create({
  baseURL: 'https://note-taking-api.herokuapp.com/',
});

export default api;
