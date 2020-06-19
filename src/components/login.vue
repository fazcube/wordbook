<template>
	<div id="loginpage">
		<p><img alt="Vue logo" src="../assets/logo.png"></p>
		<p><input type="text" v-model="username" /></p>
		<p><input type="text" v-model="password" /></p>
		<p><button type="button" @click="login">登录</button></p>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'login',
		data: function() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login: function() {
				var that = this;
				axios.get("http://localhost:8080/#/login", {
					username: that.username,
					password: that.password
				}).then(function(result) {
					console.log(that);
					if(that.username=='admin'&&that.password=='123'){
						console.log(result);
						that.$router.push("/success");
					}
				});
				/* if (this.username == "admin" && this.password == "123") {
					alert("登陆成功！");
					this.$router.push("/success")
				} else {
					alert("登陆失败！")
				} */
			}
		}
	}
</script>

<style>
	.loginpage {
		text-align: center;
	}
</style>
