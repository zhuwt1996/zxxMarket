<!-- 新增/编辑地址 -->
<template>
	<view class="editAddr">
		<u-form :model="addrForm" :label-width="180">
			<u-form-item label="姓名">
				<u-input v-model="addrForm.name" placeholder="请输入您的姓名"></u-input>
			</u-form-item>
			<u-form-item label="联系电话">
				<u-input v-model="addrForm.phone" placeholder="请输入您的联系电话"></u-input>
			</u-form-item>
			<u-form-item label="住址">
				<u-input type="select" :select-open="pickerShow" v-model="addrForm.addr" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item label="详细地址">
				<u-input v-model="addrForm.detailAddr" placeholder="请输入您的详细地址"></u-input>
			</u-form-item>
			<u-form-item label="地址标签">
				<u-radio-group v-model="addrForm.tag" active-color="#df663a">
					<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" shape="circle">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="设为默认地址">
				<u-switch slot="right" v-model="addrForm.isDefault"></u-switch>
			</u-form-item>
		</u-form>

		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>

		<button class="newAddrBtn" @click="save">保存
		</button>
	</view>
</template>

<script>
	import { mapMutations } from "vuex";
	export default {
		data() {
			return {
				addrForm: {
					name: "",
					phone: "",
					addr: "",
					detailAddr: "",
					tag: "",
					isDefault: false
				},
				radioList: [{
						name: '家'
					},
					{
						name: '公司'
					},
					{
						name: '学校'
					},
					{
						name: '其他'
					}
				],
				pickerShow: false
			}
		},
		onLoad() {

		},
		methods: {
			...mapMutations(["ADD_RECIVEADDRESS"]),
			// 选择地区回调
			regionConfirm(e) {
				this.addrForm.addr = e.province.label + e.city.label + e.area.label;
			},
			// 保存地址
			save() {
				this.ADD_RECIVEADDRESS(this.addrForm)
				uni.showToast({
					icon: "none",
					title: "保存成功"
				})
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.editAddr {
		padding: 30rpx 40rpx;
	}

	.newAddrBtn {
		position: fixed;
		bottom: 60rpx;
		margin-left: 10rpx;
		width: 650rpx;
		color: #FFFFFF;
		background-color: red;
		border-radius: 40rpx;
		height: 75rpx;
		line-height: 75rpx;
		font-size: 28rpx;

		&:after {
			border: none;
		}
	}
</style>
