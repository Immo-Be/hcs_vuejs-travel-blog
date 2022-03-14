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
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/contactView/AppContact.vue')
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
  
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),

  routes,

  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }    }
    // always scroll to top
    // return savedPosition || { top: 0 }

  // if (to.hash) {
  //   return {
  //     el: to.hash,
  //     behavior: 'smooth',}}

  
  },
  
  // scrollBehavior (to, from, SavedPosition) {
  //   if (to.hash) {
  //     const el = window.location.href.split('#')[1]
  //     if (el.length) {
  //       document.getElementById(el).scrollIntoView({ behavior: 'smooth' })
  //     }
  //   } else if (SavedPosition) {
  //     return SavedPosition
  //   } else {
  //     document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  //   }
  // }
  

})

export default router
