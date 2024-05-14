import axios from 'axios';

const postsApi = axios.create({
  baseUrl: 'http://localhost:3031'
});

export default postsApi;
