import {createRouter, createWebHistory, LocationQueryRaw} from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';
import {getToken , isLogin} from "../utils/auth";
import { useUserStore } from '../store';
import usePermission from '../hooks/permission'


NProgress.configure({ showSpinner: false }); // NProgress Configuration


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/h5/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
    REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  async function crossroads() {
    const Permission = usePermission();
    if (Permission.accessRouter(to)) {
      next()
    }
    else {
      const destination = Permission.findFirstPermissionRoute(
          appRoutes,
          userStore.role
      ) || {
        name: 'notFound',
      };
      // 前往首个有权限的页面或者404。
      next(destination);
    }
  }
  // 判读用户是否登录
  if (isLogin()) {
    // 有角色信息表示当前用户已经登录且获取过用户信息

    if (userStore.role) {

      await crossroads();
    } else {
      try {
        if (to.name === 'login'){

          next()
        }else {

          await userStore.info(); // 获取用户角色信息后再进行后续跳转处理
          await crossroads();
        }

      } catch (error) {
        next({
          name: 'login',
          query: {
            redirect: to.name,
            ...to.query,
          } as LocationQueryRaw,
        });
      }
    }
  } else {
    // 如果未登录则重定向到登录页面
    if (to.name === 'login') {
      next();
      return;
    }
    next({
      name: 'login',
      query: {
        redirect: to.name,
        ...to.query,
      } as LocationQueryRaw,
    });
  }
});


// const userStore = useUserStore();
// console.log(userStore)
createRouteGuard(router);

export default router;
