<template>
	<div style="width: 100%;height: 810px;background-color: #F7F8FA;">
		<div class="text-center parent">
			<div class="child">
				<h1 class="font-weight-bold" style="line-height: 175%;">单词本</h1>
				<span class="font-weight-light">English word book</span>
			</div>
		</div>
		<div class="container text-center">
			<van-form @submit="onSubmit">
				<div class="row mt-4">
					<van-field v-model="username" name="username" label="用户名" left-icon="manager" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
				</div>
				<div class="row mt-1 mb-5">
					<van-field v-model="password" type="password" name="password" label="密码" left-icon="lock" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
				</div>
				<div class="mt-5" style="margin: 16px;">
					<van-button class="btncolor" round block type="info" native-type="submit">登录</van-button>
				</div>
			</van-form>
			<div class="row fixed-bottom" style="height: 50px;">
				<div class="col-5">
					<a href="javascript:;" @click="phonelogin">手机号登录</a>
				</div>
				<div class="col-3"></div>
				<div class="col-4">
					<a href="javascript:;" @click="toregister">注册</a>
				</div>
			</div>
		</div>
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
			phonelogin(){
				this.$toast.fail('该功能暂未开放');
			},
			toregister(){
				console.log("跳转到注册页面");
				this.$router.push("/register");
			},
			onSubmit(values) {
				var that = this;
				console.log(values);
				that.$toast.loading({
					duration: 0, // 持续展示 toast
					forbidClick: true,
					message: '登录中...',
				});
				setTimeout(() => {
					axios.post("/api/wuser/login", {
						username: values.username,
						password: values.password
					}).then(function(result) {
						console.log(result.data);
						if (result.data.stateCode == '200') {
							that.$toast.clear();
							sessionStorage.setItem("login_user", JSON.stringify(result.data.data));
							that.$router.push("/mywordbook");
						} else if (result.data.stateCode == '500') {
							setTimeout(()=>{
								that.$toast.fail("用户名或密码错误");
							})
							that.$toast.clear();
						}
					})
				}, 1000)

			}
		}
	}
</script>

<style>
	.parent {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 300px;
		background-color: #00aa7f;
	}

	.child {
		font-family: kaiti;
		border-radius: 5px;
		width: 40%;
		height: 25%;
		background-color: white;
	}

	.child span {
		font-family: microsoft yahei;
		display: block;
		color: white;
	}

	.btncolor {
		background-color: #00aa7f;
		border: 1px solid #00aa7f;
	}
</style>
