import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from "@/stores/index.js"

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/auth',
			component: () => import('@/layouts/Blank.vue'),
			children: [
				{ path: '', name: 'Auth', component: () => import('@/views/Auth.vue') }
			]
		},
		{
			path: '/account',
			component: () => import('@/layouts/Account.vue'),
			meta: { admin: true },
			children: [
				{ path: 'dashboard', name: 'Dashboard', component: () => import('@/views/Dashboard.vue') },
				{ path: 'users', name: 'Users', component: () => import('@/views/Users.vue') }
			]
		},
		{ path: "*", redirect: '/auth' }
	]
})

// Nav Guard
router.beforeEach( async(to, from, next) => {
	if (to.matched.some(record => record.meta.admin)) {
		let token = localStorage.getItem("bloverse_admin_token")
		if(!token) {
			next({
				path: '/auth',
				query: {
					redirect: to.fullPath
				}
			})
		}else {
			next()
		}
	} else {
	  next()
	}
})
	
export default router