import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/homeView/AppHome.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'about',
    // route level code-splitting
    component: () => import('../pages/contactView/AppContact.vue')
  },
  {
    path: '/spam',
    name: 'ContactSpam',

    component: () => import('../pages/contactView/ContactSpam.vue')
  },
  {
    path: '/post/:id',
    name: 'AppPost',
    component: () => import('../pages/postView/AppPost.vue')
  },
  {
    path: '/new',
    name: 'AppNewPostForm',
    component: () => import('../pages/newPostView/AppNewPostForm.vue')
  },
  {
    path: '/attribution',
    name: 'TheFooterAttribution',
    component: () => import('../components/layout/TheFooterAttribution.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  },
  
];

const router = createRouter({
  history: createWebHistory(),

  routes,

  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }    }
  
  },
});

export default router
