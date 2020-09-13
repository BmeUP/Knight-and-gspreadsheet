import axios from 'axios';

const axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        "Access-Control-Allow-Origin" : '*',
        "Authorization": `${localStorage.getItem('token')}`
    }
})

export default axios_instance;
