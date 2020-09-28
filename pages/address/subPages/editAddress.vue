<!-- 新增/编辑地址 -->
<template>
	<view class="editAddr">
		<u-form :model="addrForm" :label-width="180" ref="addrForm">
			<u-form-item label="姓名" prop="name" required>
				<u-input v-model="addrForm.name" placeholder="请输入您的姓名"></u-input>
			</u-form-item>
			<u-form-item label="联系电话" prop="phone" required>
				<u-input v-model="addrForm.phone" placeholder="请输入您的联系电话"></u-input>
			</u-form-item>
			<u-form-item label="住址" prop="addr" required>
				<u-input type="select" :select-open="pickerShow" v-model="addrForm.addr" placeholder="请选择地区" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item label="详细地址" prop="detailAddr" required>
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
				<u-switch slot="right" v-model="addrForm.isDefault" active-color="#df663a"></u-switch>
			</u-form-item>
		</u-form>

		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>

		<button class="newAddrBtn" @click="save">保存
		</button>
	</view>
</template>

<script>
	import {
		mapMutations
	} from "vuex";
	export default {
		data() {
			return {
				type: "",
				editIndex: null,
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
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['change', 'blur'],
					}],
					phone: [{
						required: true,
						message: '请输入手机号码',
						trigger: ['change', 'blur'],
					}],
					addr: [{
						required: true,
						message: '请选择地区',
						trigger: ['change', 'blur'],
					}],
					detailAddr: [{
						required: true,
						message: '请输入详细地址',
						trigger: ['change', 'blur'],
					}]
				},
				pickerShow: false
			}
		},
		onLoad(e) {
			if (e.addr) {
				this.type = 'edit'
				this.addrForm = JSON.parse(decodeURIComponent(e.addr))
				this.editIndex = e.editIndex
				uni.setNavigationBarTitle({
					title: '编辑地址'
				})
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.addrForm.setRules(this.rules);
		},
		methods: {
			...mapMutations(["ADD_RECIVEADDRESS", "EDIT_RECIVEADDRESS"]),
			// 选择地区回调
			regionConfirm(e) {
				this.addrForm.addr = e.province.label + e.city.label + e.area.label;
			},
			// 保存地址
			save() {
				this.$refs.addrForm.validate(valid => {
					console.log('valid', valid)
					if (!valid) {
						uni.showToast({
							icon: "none",
							title: "请检查必填项是否输入完整"
						})
						return
					}
					if (this.type == 'edit') {
						this.EDIT_RECIVEADDRESS({
							addr: this.addrForm,
							index: this.editIndex
						})
					} else {
						this.ADD_RECIVEADDRESS(this.addrForm)
					}
					uni.navigateBack()
				});

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
