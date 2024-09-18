import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginManege.vue') },
      { path: 'Register', component: () => import('pages/RegisterPage.vue') },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/dashbordLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/DashBorde.vue') },
      { path: '/Form', component: () => import('pages/FormPage.vue') },
      { path: '/portal', component: () => import('pages/PortalPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
