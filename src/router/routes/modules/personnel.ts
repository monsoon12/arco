import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/personnel',
  name: 'personnel',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '人员管理',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'personnel-list',
      name: 'personnel-list',
      component: () => import('@/views/personnel/personnel-list/index.vue'),
      meta: {
        locale: '人员管理列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'personnel-setting',
      name: 'personnel-setting',
      component: () => import('@/views/personnel/setting/index.vue'),
      meta: {
        locale: '人员管理详情修改',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'enterprise-list',
      name: 'enterprise-list',
      component: () => import('@/views/personnel/enterprise-list/index.vue'),
      meta: {
        locale: '企业管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'department-list',
      name: 'department-list',
      component: () => import('@/views/personnel/department-list/index.vue'),
      meta: {
        locale: '部门管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'play-list',
      name: 'play-list',
      component: () => import('@/views/personnel/play-list/index.vue'),
      meta: {
        locale: '职位管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'authority-list',
      name: 'authority-list',
      component: () => import('@/views/personnel/authority-list/index.vue'),
      meta: {
        locale: '权限管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
