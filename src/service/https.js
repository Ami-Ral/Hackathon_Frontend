import { authHeader } from '../helper/auth-header';
import baseURL from './baseUrl'
const axios = require('axios');

const https= axios.create({
    baseURL: baseURL + '/api',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
});

export default https
