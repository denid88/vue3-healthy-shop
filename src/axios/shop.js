import axios from 'axios'
export const shop = axios.create({
  baseURL: process.env.VUE_APP_BASE_LOCAL_URL,
});
