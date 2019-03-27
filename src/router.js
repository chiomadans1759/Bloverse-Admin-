import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/auth',
			component: () => import('@/layouts/Blank.vue'),
			children: [
				{ path: '', name: 'Auth', component: () => import('@/views/Auth.vue') },
				{ path: 'users-profile', name: 'UsersProfile', component: () => import('@/components/UsersProfile.vue') }
			]
		},
		{
			path: '/account',
			component: () => import('@/layouts/Account.vue'),
			children: [
				{ path: 'dashboard', name: 'Dashboard', component: () => import('@/views/Dashboard.vue') },
				{ path: 'users', name: 'Users', component: () => import('@/views/Users.vue') }
			]
		},
		{ path: "*", redirect: '/auth' }
	]
})