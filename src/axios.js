import axios from "axios";
const BASE_URL = "https://api.jsonbin.io/v3/b/671cbf69e41b4d34e44906b2/latest";
export const request = axios.create({
  baseURL: BASE_URL,
});
