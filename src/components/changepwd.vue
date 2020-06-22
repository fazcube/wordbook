<template>
	<div>
		<div class="container text-center">
			<div class="row" style="background-color:#00aa7f;height: 40px;">
				<div class="col-3 d-flex">
					<svg class="bi bi-arrow-left-short" width="2.5em" height="2.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
					@click="back">
						<path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
						<path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
					</svg>
				</div>
				<div class="col-5">
					<p class="text-white" style="font-size: 20px;line-height: 40px;">修改密码</p>
				</div>
				<div class="col-4">
				</div>
			</div>
		</div>
		<div class="container text-center">
			<van-form @submit="onSubmit">
				<div class="row mt-4">
					<van-field v-model="password" type="password" name="password" label="密码" left-icon="lock" placeholder="请输入密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				</div>
				<div class="row mt-1 mb-5">
					<van-field v-model="password1" type="password" name="password" label="密码" left-icon="lock" placeholder="请再次输入密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				</div>
				<div class="mt-5" style="margin: 16px;">
					<van-button class="btncolor" round block type="info" native-type="submit">提交</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'updateWord',
		data: function() {
			return {
				password: '',
				password1: ''
			}
		},
		methods: {
			back() {
				console.log(this.word);
				this.$router.push("/mywordbook");
			},
			onSubmit(value) {
				var that = this;
				console.log("submit", value);
				if (that.password == that.password1) {
					axios.post("/api/wuser/changePassword", {
						uid: JSON.parse(sessionStorage.getItem("login_user")).uid,
						username: JSON.parse(sessionStorage.getItem("login_user")).username,
						password: that.password
					}).then(function(result) {
						console.log(result);
						if (result.data.stateCode == '200') {
							that.$toast.success('修改成功');
							that.$router.push("/mywordbook");
						} else {
							console.log("修改失败！");
						}
					});
				} else {
					that.$toast.fail('两次输入的密码不一致');
				}
			}
		}
	}
</script>

<style>
	.btncolor {
		background-color: #00aa7f;
		border: 1px solid #00aa7f;
	}
</style>
