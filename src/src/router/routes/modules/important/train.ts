import { DEFAULT_LAYOUT } from '../../base';
import { AppRouteRecordRaw } from '../../types';

const LIST: AppRouteRecordRaw = {
  path: '/train',
  name: 'train',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '培训管理',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'train-list',
      name: 'train-list',
      component: () => import('@/views/train/train-list/index.vue'),
      meta: {
        locale: '培训列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'train-add',
      name: 'train-add',
      component: () => import('@/views/train/train-add/index.vue'),
      meta: {
        locale: '培训编辑',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'train-check',
      name: 'train-check',
      component: () => import('@/views/train/train-check/index.vue'),
      meta: {
        locale: '培训查看',
        requiresAuth: true,
        roles: ['*'],

      },
    },
  ],
};

export default LIST;
