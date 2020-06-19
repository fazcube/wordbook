import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import mywordbook from '../components/mywordbook.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/login',
		name:'login',
		component:login
	},
	{
		path:'/',
		redirect:'/login'
	},
	{
		path:'/mywordbook',
		name:'mywordbook',
		component:mywordbook
	}
]

const router = new VueRouter({
	routes
})

export default router
