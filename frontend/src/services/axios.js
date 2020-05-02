import axios from 'axios'
import 'dotenv/config';

const API = process.env.API

const api = axios.create({
    baseURL: API || "http://localhost:3000"
})

export default api;