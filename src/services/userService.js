import { axiosInstance } from "./axios";


export function getUserById(id) {
    return axiosInstance
        .get(`/users/${id}`)
        .then(response => {
            console.log('\nBase URL:', axiosInstance.defaults.baseURL);
            console.log(response);
            return response.data;
        })
        .catch(error => error);
}

export function getUserByUsername(username) {
    return axiosInstance
        .get(`/users/username/${username}`)
        .then(response => {
            console.log('\nBase URL:', axiosInstance.defaults.baseURL);
            console.log(response);
            return response.data;
        })
        .catch(error => error);
}