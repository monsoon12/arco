import { DEFAULT_LAYOUT } from '../../base';
import { AppRouteRecordRaw } from '../../types';


const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '首页',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 0,
    hideInMenu:false
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
        hideInMenu:true,
        activeMenu:'dashboard'
      },
    },
    /** simple */
    // {
    //   path: 'monitor',
    //   name: 'Monitor',
    //   component: () => import('@/views/dashboard/monitor/index.vue'),
    //   meta: {
    //     locale: 'menu.dashboard.monitor',
    //     requiresAuth: true,
    //     roles: ['admin'],
    //   },
    // },
    /** simple end */
  ],
};

export default DASHBOARD;
