import axios from 'axios';
import Vue from '../src/main';

// 全局设置baseURL
axios.defaults.baseURL = 'http://localhost:3000';

/*axios.interceptors.request.use((config) => {
 // Vue.$loading.show();
  return config;
}, (error) => {
 // Vue.$loading.hide();
  return Promise.reject(error);
});

axios.interceptors.response.use(
  (res) => {

 //   Vue.$loading.hide();
    return Promise.resolve(res);
  },
  (error) => {
 //   Vue.$loading.hide();
    return Promise.reject(error);
  },
);*/

export default {
  get: (url, config) => axios.get(url, config),
  post: (url, config) => axios.post(url, config),
  put: (url, config) => axios.put(url, config),
  delete: (url, config) => axios.delete(url, config)
}
