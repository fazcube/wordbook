<template>
	<div class="container text-center">
		<div class="row" style="background-color:#00aa7f;height: 40px;">
			<div class="col-3">
				<van-icon name="bars" size="30px" color="#ffffff" @click="showPopup" />
				<van-popup v-model="show" position="left" :style="{ width: '50%', height:'100%' }" />
			</div>
			<div class="col-5">
				<p class="text-white" style="font-size: 20px;line-height: 40px;">我的单词本</p>
			</div>
			<div class="col-4">
				<button type="button" class="btn btn-sm btn-light" style="margin-top: 5px;margin-left: 20px;">添加单词</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mywordbook',
		data() {
			return {
				show: false,
			};
		},

		methods: {
			showPopup() {
				this.show = true;
			},
		},
	};
</script>

<style>
</style>
