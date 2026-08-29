import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'

const defaultTitle = 'Psychotherapie von Loe | Psychotherapeutische Praxis in Heidelberg'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/impressum',
    component: () => import('./views/Impressum.vue'),
    meta: { title: 'Impressum | Psychotherapie von Loe' },
  },
  {
    path: '/datenschutz',
    component: () => import('./views/Datenschutz.vue'),
    meta: { title: 'Datenschutz | Psychotherapie von Loe' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./views/NotFound.vue'),
    meta: { title: 'Seite nicht gefunden | Psychotherapie von Loe' },
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
