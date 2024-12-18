import axios from "axios";

export const baseUrl = "https://healthtracker-application-production.up.railway.app/api/"
export const localUrl = "http://localhost:8085/api/"
const sessionId = localStorage.getItem("sessionId")



export const axiosInstance = axios.create({
    baseURL: localUrl,
    headers: {'Content-Type' : "application/json", "Sessionid" : sessionId },

});