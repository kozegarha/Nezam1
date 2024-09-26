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
<<<<<<< HEAD
      { path: '', component: () => import('pages/DashBoard.vue') },
      { path: 'form', component: () => import('pages/FormPage.vue') },
      { path: 'portal', component: () => import('pages/PortalPage.vue') },
      
=======
      { path: '', component: () => import('src/pages/DashboardPage.vue') },
      { path: 'form', component: () => import('src/pages/FormPage.vue') },
      { path: 'portal', component: () => import('src/pages/PortalPage.vue') },
>>>>>>> fe5fb99b4f42f2ec25f419f0f401f1d33b23a7e3
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
