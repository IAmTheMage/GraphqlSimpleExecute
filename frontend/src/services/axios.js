import axios from 'axios';

const API = process.env.API

const api = axios.create({
    baseURL: API
})

export default api;