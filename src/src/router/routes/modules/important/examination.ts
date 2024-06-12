import { DEFAULT_LAYOUT } from '../../base';
import { AppRouteRecordRaw } from '../../types';

const LIST: AppRouteRecordRaw = {
  path: '/examination',
  name: 'examination',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '试卷管理',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'search-table-list',
      name: 'examination-SearchTable-list',
      component: () => import('@/views/examination/search-table-list/index.vue'),
      meta: {
        locale: '试卷列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'step',
      name: 'examination-step',
      component: () => import('@/views/examination/step/index.vue'),
      meta: {
        locale: '新建试卷',
        requiresAuth: true,
        roles: ['*'],

      },
    },
  ],
};

export default LIST;
