import axios from "axios";

const instance = axios.create({
  baseURL: "/api", // Use the proxy path
  // timeout: 5000,
  // headers: { Authorization: "Bearer YOUR_TOKEN" },
});

export default instance;
