import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'

const defaultTitle = 'Psychotherapeutische Praxis von Loe | Psychotherapie in Heidelberg'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/impressum',
    component: () => import('./views/Impressum.vue'),
    meta: { title: 'Impressum | Psychotherapeutische Praxis von Loe' },
  },
  {
    path: '/datenschutz',
    component: () => import('./views/Datenschutz.vue'),
    meta: { title: 'Datenschutz | Psychotherapeutische Praxis von Loe' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./views/NotFound.vue'),
    meta: { title: 'Seite nicht gefunden | Psychotherapeutische Praxis von Loe' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || defaultTitle
})

export default router
