import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/rice',
			component: () => import('@/views/rice/rice.vue'),
		},
		{
			path: '/phone',
			component: () => import('@/views/phone/phone.vue'),
		},
	],
})
