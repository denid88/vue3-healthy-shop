import axios from 'axios'
export const axiosAuth = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});
