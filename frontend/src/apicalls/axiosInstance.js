import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://zenithsolutions-backend.vercel.app/',
    // baseURL: 'http://localhost:5000/',  
    headers: {
        'Content-Type': 'application/json', 
      },
});
