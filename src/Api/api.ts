import axios, { AxiosInstance } from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_URL
    : "http://localhost:9191/api/";

const server: AxiosInstance = axios.create({
  baseURL,
});

export default server;
