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
					<p class="text-white" style="font-size: 20px;line-height: 40px;">修改单词</p>
				</div>
				<div class="col-4">
				</div>
			</div>
		</div>
		<div class="container text-center">
			<van-form @submit="onSubmit">
				<div class="row mt-4">
					<van-field v-model="word.wname" name="wname" label="单词" :rules="[{ required: true, message: '请输入单词' }]" />
				</div>
				<div class="row mt-1">
					<van-field v-model="word.pronunciation" name="pronunciation" label="读音" :rules="[{ required: true, message: '请输入读音' }]" />
				</div>
				<div class="row mt-1 mb-5">
					<van-field v-model="word.translate" name="translate" label="翻译" :rules="[{ required: true, message: '请输入翻译' }]" />
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
				wid: 0,
				wname: '',
				pronunciation: '',
				translate: '',
				word: JSON.parse(sessionStorage.getItem("update_word"))
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
				axios.post("/api/word/updateWord", {
					wid: sessionStorage.getItem("update_id"),
					wname: value.wname,
					pronunciation: value.pronunciation,
					translate: value.translate
				}).then(function(result) {
					console.log(result);
					if (result.data.stateCode == '200') {
						that.$dialog.alert({
							message: '修改成功！',
						}).then(() => {
							that.$router.push("/mywordbook");
						});
					} else {
						console.log("修改失败！")
					}
				})
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
