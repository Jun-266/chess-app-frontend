import axios from 'axios';

console.log("\n\n&&&&Valor de VITE_API:", import.meta.env.VITE_API);


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
});

console.log("\n\n###Axios base URL:", axiosInstance.defaults.baseURL);

export { axiosInstance };