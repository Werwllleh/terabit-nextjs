import {API_URL} from "@/constants";
import {getContentType} from "@/api/api.helper";
import axios from "axios";


const axiosOptions = {
  baseURL: API_URL,
  headers: getContentType(),
  withCredentials: true
}

export const axiosClassic = axios.create(axiosOptions)
