import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import success from '../components/success.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/login',
		name:'login',
		component:login
	},
	{
		path:'/success',
		name:'success',
		component:success
	},
	{
		path:'/',
		redirect:'/login'
	}
]

const router = new VueRouter({
	routes
})

export default router
