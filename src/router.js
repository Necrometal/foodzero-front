import { createRouter, createWebHistory } from 'vue-router'


let routes = [
	{
		path: '/',
        name: 'home',
		component: () => import('@/pages/home.vue'),
	},
	{	
		path: '/menus', 
		name: 'menus', 
		component: () => import('@/pages/menu.vue'),
	},
    {	
		path: '/contact', 
		name: 'contact', 
		component: () => import('@/pages/contact.vue'),
	},
    {	
		path: '/about-us', 
		name: 'about-us', 
		component: () => import('@/pages/about.vue'),
	},
	{
		// path: '/:pathMatch(.*)*',
		path: '/:catchAll(.*)',
		name: 'not-found',
		component: () => import('@/pages/not-found.vue')
	}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router