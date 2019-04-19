import axios from 'axios';

const apiURL = `${process.env.REACT_APP_API_URL}/api`;
console.log(apiURL);

const httpClient = axios.create({
  baseURL: apiURL,
  headers: { 'Content-Type': 'application/json' }
});

export default httpClient;