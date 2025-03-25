// src/lib/api.js
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api", // Matches your Vite proxy path
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
