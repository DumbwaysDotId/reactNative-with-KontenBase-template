import axios from 'axios';

let API_KEY = 'YOUR_API_KEY';

// Create base URL API
const API = axios.create({
  baseURL: `https://api.kontenbase.com/query/api/v1/${API_KEY}/`,
});

export default API;
