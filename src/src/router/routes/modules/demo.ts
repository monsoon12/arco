import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';


const DASHBOARD: AppRouteRecordRaw = {
  path: '/list_demo',
  name: 'list_demo',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '测试栏目',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
    hideInMenu:false
  },
  children: [
    {
      path: 'demo',
      name: 'demo',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        locale: '测试',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu:true,
        // activeMenu:'homeList'
      },
    },

    /** simple end */
  ],
};



export default DASHBOARD;
