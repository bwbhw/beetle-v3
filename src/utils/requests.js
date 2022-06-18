import axios from "axios";

const requests = axios.create({
    baseURL: "/api",
    timeout: 10000,
});

requests.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

requests.interceptors.response.use((response) => {
    return response;
});

export default requests;