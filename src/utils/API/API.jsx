import axios from "axios";
const url = "https://62d0c401d9bf9f17058d105d.mockapi.io/data-on/api/v1/";
const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
