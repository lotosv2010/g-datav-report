import axios from "axios";

const service = axios.create({
  baseURL: "https://apis.imooc.com",
  timeout: 5000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    config.params = {
      ...config.params,
      icode: "13926EAFCAA16CC3",
    };
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      return Promise.reject(new Error("请求失败!"));
    }
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
