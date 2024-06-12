import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/list-table',
  name: 'list-table',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '课程管理',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'search-table-list',
      name: 'SearchTable-list',
      component: () => import('@/views/list-table/search-table-list/index.vue'),
      meta: {
        locale: '课程列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'search-table-categorize',
      name: 'search-table-categorize',
      component: () => import('@/views/list-table/search-table-categorize/index.vue'),
      meta: {
        locale: '课程分类',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'search-table-add',
      name: 'search-table-add',
      component: () => import('@/views/list-table/search-table-add/index.vue'),
      meta: {
        locale: '新增课程',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
