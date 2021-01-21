import Axios from "axios";
import { getItem } from "./SessionStorage";

export function initialAxios() {
  Axios.defaults.baseURL = `https://api-bellamoon.herokuapp.com/api`;
  Axios.interceptors.request.use((config) => {
    if (getItem("TOKEN")) {
      config.headers.Authorization = `Bearer ${getItem("TOKEN")}`;
    }
    return config;
  });
}
