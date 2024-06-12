import { AppRouteRecordRaw } from '../../types';


const DASHBOARD: AppRouteRecordRaw = {
  path: '/list',
  name: 'list',
  component:import('@/views/h5/list/index.vue'),
  meta: {
    locale: '首页',
    requiresAuth: false,
  },

};

export default DASHBOARD;
