import axios from "axios";

const URL_API = "YOUR URL HERE";

const instance = axios.create({
    withCredentials: true,
    timeout: 3000,
    baseURL: URL_API,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

export const setToken = (token: string) => {
    instance.defaults.headers.Authorization = "Bearer " + token;
};

const post = <T>(url: string, params?: { [key: string]: any }): Promise<T> =>
    instance.post(url, params).then(({ data }) => data);

const get = <T>(url: string, params?: { [key: string]: any }): Promise<T> =>
    instance.get(url, { params }).then(({ data }) => data);
