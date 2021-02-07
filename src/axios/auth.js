import axios from 'axios'
export const auth = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});
