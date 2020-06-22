<template>
	<div>
		<div class="container text-center">
			<div class="row fixed-top" style="background-color:#00aa7f;height: 40px;">
				<div class="col-3 d-flex">
					<van-icon name="bars" size="30px" color="#ffffff" @click="showPopup" style="margin-top: 5px;margin-left: 10px;"/>
					<van-popup v-model="show" position="left" :style="{width:'50%',height:'100%'}">
						<img src="../assets/dtg.png" alt="头像" style="width: 100px;border-radius: 50%;margin-top: 20px;">
						<p class="mt-3 font-weight-bold" style="font-size: 24px;">彭志军</p>
						<van-button icon="lock" plain hairline type="info" style="margin-bottom: 5px;" @click="changepassword">修改密码</van-button>
						<van-button icon="clear" plain hairline type="primary" @click="quit">安全退出</van-button>
					</van-popup>
				</div>
				<div class="col-5">
					<p class="text-white" style="font-size: 20px;line-height: 40px;">我的单词本</p>
				</div>
				<div class="col-4">
					<button type="button" class="btn btn-sm btn-info" style="margin-top: 5px;margin-left: 20px;" @click="add">添加单词</button>
				</div>
			</div>
		</div>
		<div style="margin-top: 40px;">
			<van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
				<div class="row justify-content-center mt-1" style="margin-bottom: 150px;">
					<div class="col-12" v-for="(item,index) in list" :key="index">
						<van-swipe-cell>
							<div class="row justify-content-center mt-1">
								<div class="col-12 card">
									<div class="card-body">
										<h5 class="card-title">{{item.wname}} {{item.pronunciation}}</h5>
										<p class="card-text">{{item.translate}}</p>
									</div>
								</div>
							</div>
							<template #right>
								<van-button square text="修改" @click="update(item)" type="primary" class="delete-button" />
								<van-button square text="删除" @click="del(index,item.uwid)" type="danger" class="delete-button" />
							</template>
						</van-swipe-cell>
					</div>
					<p class="pt-5 text-muted">没有更多了...</p>
				</div>
			</van-pull-refresh>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		created() {
			this.load();
		},
		name: 'mywordbook',
		data() {
			return {
				list: [],
				uwId:0,
				userId: 0,
				show: false,
				isLoading: false
			};
		},
		methods: {
			load(){
				var that = this;
				axios.post("/api/userword/selectUserWord", {
					userId: JSON.parse(sessionStorage.getItem("login_user")).uid
				}).then(function(result) {
					if (result.data.stateCode == '200') {
						that.list = result.data.data;
						console.log(that.list);
					} else if (result.data.stateCode == '500') {
						alert("操作有误！");
					}
				})
			},
			showPopup() {
				this.show = true;
			},
			onRefresh() {
				console.log(JSON.parse(sessionStorage.getItem("login_user")).uid);
				setTimeout(() => {
					this.load();
					this.isLoading = false;
				}, 1000)
			},
			add() {
				console.log("添加单词");
				this.$router.push("/addword");
			},
			update(item){
				console.log("修改编号："+item.wid+"的单词");
				sessionStorage.setItem("update_word",JSON.stringify(item));
				this.$router.push("/updateword");
			},
			del(index,id) {
				console.log(index);
				console.log(id);
				this.list.splice(index, 1);
				axios.post("/api/userword/deleteById",{
					uwId:id
				}).then(function(result){
					if(result.data.stateCode == '200'){
						console.log("删除成功！");
					}else{
						console.log("删除失败！");
					}
				})
			},
			quit() {
				sessionStorage.clear("login_user");
				this.$router.push("/login");
			},
			changepassword(){
				console.log("进入修改密码页面");
				this.$router.push("/changepwd");
			}
		}
	};
</script>

<style>
	.goods-card {
		margin: 0;
		background-color: @white;
	}

	.delete-button {
		height: 100%;
	}
</style>
