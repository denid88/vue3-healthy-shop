import axios from 'axios'
export const products = axios.create({
  baseURL: process.env.VUE_APP_BASE_LOCAL_URL,
});
