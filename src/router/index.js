import { createWebHistory, createRouter } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

console.log(routes)
export const router = createRouter({
	history: createWebHistory(),
	routes,
})
