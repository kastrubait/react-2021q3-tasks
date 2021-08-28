import axios from "axios";
import {serverURL} from "./config/api.config";

export const youtube = axios.create({
  baseURL: serverURL,
  timeout: 5000,
});
