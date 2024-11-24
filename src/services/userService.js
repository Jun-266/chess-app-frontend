import { axiosInstance } from "./axios";


export function getUserById () {
    
    return axiosInstance.get('/users/99')
        .then(response => {
            console.log('\nBase URL:', axiosInstance.defaults.baseURL);
            console.log(response);
            return response.data
        })
        .catch(error => error);
}