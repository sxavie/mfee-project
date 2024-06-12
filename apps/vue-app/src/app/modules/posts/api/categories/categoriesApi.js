import axios from 'axios';

const categoriesApi = axios.create({
  baseUrl: 'http://localhost:3000'
});

export default categoriesApi;
