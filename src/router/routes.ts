import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LoginManager.vue') },
      {
        path: 'register',
        component: () => import('src/pages/RegisterPage.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('src/layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/DashboardPage.vue') },
      { path: 'form', component: () => import('src/pages/FormPage.vue') },
      { path: 'portal', component: () => import('src/pages/PortalPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
