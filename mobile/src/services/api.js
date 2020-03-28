import axios from '../../node_modules/axios';

const api = axios.create({
    baseURL: 'http://172.31.0.250:3333',
})

export default api;