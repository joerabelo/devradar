import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.66:3333' // Android as vezes considera 'localhost' como '10.0.2.2'
});

export default api;