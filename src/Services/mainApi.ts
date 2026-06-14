import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE || "http://localhost:3000";

console.log("BASE URL:", import.meta.env.VITE_API_BASE);
console.log("API BASE:", baseURL);

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
