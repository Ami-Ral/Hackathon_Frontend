import baseURL from './baseUrl'

const axios = require('axios');

const http = axios.create({

    baseURL:  baseURL + '/api',
    headers:  {
        "Content-Type": "application/json;charset=utf-8"
    }
})
export default http
