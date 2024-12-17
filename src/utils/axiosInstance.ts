import axios from "axios";

export const baseUrl = "https://healthtracker.up.railway.app/api/"
export const localUrl = "http://localhost:8085/api/"




export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type' : "application/json"},

});