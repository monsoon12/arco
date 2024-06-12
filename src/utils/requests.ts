import axios, {AxiosRequestConfig, AxiosResponse } from 'axios';
import {clearToken, getToken} from '@/utils/auth'
import { Message } from '@arco-design/web-vue';



function errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
        case 401:
            Message.warning('错误401');
            break;
        case 403:
            Message.warning('错误403');
            break;
        case 404:
            Message.warning('请求的资源不存在');
            break;
        case 500:
            Message.warning('错误500');
            break;
        default:
            Message.warning('连接错误');
    }
}

// 创建axios实例
const service = axios.create({
    // 配置选项
    baseURL: 'http://localhost:5000',
    timeout: 10000,
});

// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在发送请求前做些什么
        const token = getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    },
);

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        if (response.status === 200) {
            // return Promise.resolve(response.data);
            if(response.data.code === 20000){
                return response.data;
            }
            if(response.data.code === 40300){
                clearToken();
                window.location.reload();
            }
        }
        else {
            // return Promise.reject(response.data);
            Message.warning('错误2');
        }
        return response.data;
    },
    (error) => {
        // 对响应错误做点什么
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response);

        } else {
            // 处理断网的情况
            Message.warning('网络连接异常');
        }
        return Promise.reject(response.data);
    },
);

export default service ;
