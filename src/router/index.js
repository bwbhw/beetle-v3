import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/loginView.vue'

const routes = [
    {
        path: '/',
        redirect: '/login',
       
      },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/homeView.vue'),
    meta: {
        title: '首页',
    }
  },
  {
    path: '/login',
    name: 'login',   
    component: loginView,
    meta: {
        title: '登录',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    let title = to.meta.title;
    if (to.path === "/login") {
        next();
    } else {
        if (localStorage.getItem("token")) {
            next();
            document.title = title;
        } else {
            next("/login");
            document.title = title;
        }
    }

});

export default router
