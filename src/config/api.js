import axios from 'axios';

// let API_KEY = 'YOUR_API_KEY';
let API_KEY = '2e3c2a4c-d0bb-45bf-90ba-046719690637';

// Create base URL API
const API = axios.create({
  baseURL: `https://api.kontenbase.com/query/api/v1/${API_KEY}/`,
});

export default API;
