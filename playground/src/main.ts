import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterScroller } from '../../src'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/about.vue'),
    },
  ],
})

app.use(router)
app.use(createRouterScroller({
  selectors: {
    'window': true,
    '.scrollable': true,
  },
}))
app.mount('#app')
