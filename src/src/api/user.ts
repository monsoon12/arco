import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
// import {Request} from '../utils/requests'


export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
// export function login2(data: LoginData) {
//   return Request.axiosInstance({
//     url: '/api/login',
//     method: 'post',
//     data: {username: 'heweichao',password: '1023456'}
//   })
// }

export function login2(data: LoginData) {
  // return axios.post<LoginRes>('https://api2.wankebuluo.com/api/login', data);
  return axios.post<UserState>('/api/user/info');
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
