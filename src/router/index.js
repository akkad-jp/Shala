import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', component: import ('@/pages/IndexPage.vue') },
  { path: '/test', component: import ('@/pages/TestPage.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
