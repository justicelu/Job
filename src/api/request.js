// 配置请求响应预处理器用于请求头相关参数的挂载和响应的预处理等
import axios from "axios";

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/',
    // 请求根路径
    baseURL: "/api",
    // 请求超时时间
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

// request拦截器
service.interceptors.request.use(
    (config) => {
        // 有token就挂载token,没有就不挂载
        // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        return config;
    },
    (error) => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    (response) => {
        const code = response.status;
        if (code < 200 || code > 300) {
            // 在此进行请求错误的集中处理
            return Promise.reject("error");
        } else {
            return response.data;
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default service;
