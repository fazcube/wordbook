import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import mywordbook from '../components/mywordbook.vue'
import updateword from '../components/updateword.vue'
import addword from '../components/addword.vue'
import register from '../components/register.vue'
import changepwd from '../components/changepwd.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/',
		name: 'udf',
		redirect: '/login'
	},
	{
		path: '/register',
		name: 'register',
		component: register
	},
	{
		path: '/mywordbook',
		name: 'mywordbook',
		component: mywordbook
	},
	{
		path: '/addword',
		name: 'addword',
		component: addword
	},
	{
		path: '/updateword',
		name: 'updateword',
		component: updateword
	},
	{
		path:'/changepwd',
		name:'changepwd',
		component:changepwd
	}
]

const router = new VueRouter({
	routes
})

// router.beforeEach((to, from, next) => {
// 	console.log('navigation-guards');

// 	let isLogin = sessionStorage.getItem("login_user"); // 是否登录

// 	next();
// })

router.beforeEach((to, from, next) => {
	console.log(to.name)
	if (to.name == 'login') {
		if (sessionStorage.getItem("login_user") != null) {
			next(from.path);
		} else {
			next();
			return;
		}
	} else if (to.name == 'register') {
		next();
		return;

	} else {
		if (sessionStorage.getItem("login_user") != null) {
			next();
		} else {
			next("/login")
		}
	}
})


export default router
