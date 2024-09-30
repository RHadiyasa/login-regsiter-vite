import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "http://192.168.110.4:3000/",
});