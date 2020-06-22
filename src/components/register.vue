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
					<van-field v-model="username" name="username" label="用户名" left-icon="manager" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
				</div>
				<div class="row mt-1">
					<van-field v-model="password" type="password" name="password" label="密码" left-icon="lock" placeholder="请输入密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				</div>
				<div class="row mt-1 mb-5">
					<van-field v-model="password1" type="password" name="password" label="密码" left-icon="lock" placeholder="请再次输入密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				</div>
				<div class="mt-5" style="margin: 16px;">
					<van-button class="btncolor" round block type="info" native-type="submit">注册</van-button>
				</div>
			</van-form>
			<div class="row fixed-bottom" style="height: 50px;">
				<div class="col-5">
					<a href="javascript:;">手机号登录</a>
				</div>
				<div class="col-3"></div>
				<div class="col-4">
					<a href="javascript:;" @click="tologin">已有帐号，去登录</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'register',
		data: function() {
			return {
				username: '',
				password: '',
				password1: ''
			}
		},
		methods: {
			tologin() {
				this.$router.push("/login");
			},
			onSubmit(values) {
				var that = this;
				console.log(values);
				if (that.password == that.password1) {
					axios.post("/api/wuser/register", {
						username: values.username,
						password: values.password
					}).then(function(result) {
						console.log(result.data);
						if (result.data.stateCode == '200') {
							that.$toast.success('注册成功');
							that.$router.push("/login");
						} else if (result.data.stateCode == '500') {
							alert("注册失败！");
						}
					})
				} else {
					that.$toast.fail('两次输入的密码不一致');
				}
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
