import axios, { AxiosResponse } from 'axios';
const baseUrl = process.env.REACT_APP_API_BASE_URL;
console.log('baseUrl', baseUrl);
const instance = axios.create({
  baseURL: 'https://fvaly.herokuapp.com/api',
  timeout: 15000,
});

// const responseBody = () => (response: AxiosResponse) => response.data.data;

const responseBody = (response: AxiosResponse) => response.data.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),
  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
