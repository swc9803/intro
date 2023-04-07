import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Tunnel from '../pages/Tunnel.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/tunnel',
			name: 'Tunnel',
			component: Tunnel,
		},
	],
});

export default router;
