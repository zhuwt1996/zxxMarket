<template>
	<view>
		<view class="addressCell" v-for="(addr,k) in reciveAddrList" :key="k">
			<view class="userInfo">
				<label class="name">{{addr.name}}</label>
				<label class="phone">{{addr.phone}}</label>
				<label class="defaultTag" v-if="addr.isDefault">默认</label>
				<label class="tag">{{addr.tag}}</label>
			</view>
			<view class="address">
				<label>{{addr.addr}}{{addr.detailAddr}}</label>
				<u-icon name="edit-pen"></u-icon>
			</view>
		</view>

		<button class="newAddrBtn" @click="addAddress">
			<u-icon name="plus" style="margin-right: 15rpx;"></u-icon>添加收货地址
		</button>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {

			}
		},

		computed: {
			...mapState(["reciveAddrList"])
		},

		methods: {
			addAddress() {
				uni.navigateTo({
					url: './subPages/editAddress'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.addressCell {
		display: flex;
		flex-direction: column;
		padding: 30rpx;

		.userInfo {
			display: flex;
			margin-bottom: 20rpx;

			.name {
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
				margin-right: 20rpx;
			}

			.phone {
				font-size: 32rpx;
				color: #333333;
				font-weight: bold;
				margin-right: 20rpx;
			}

			.defaultTag {
				color: #FFFFFF;
				background-color: red;
				margin-right: 20rpx;
				padding: 0 10rpx;
				border-radius: 6rpx;
			}

			.tag {
				color: #FFFFFF;
				background-color: #007AFF;
				padding: 0 10rpx;
				border-radius: 6rpx;
			}
		}

		.address {
			display: flex;
			justify-content: space-between;
		}
	}

	.newAddrBtn {
		position: fixed;
		bottom: 60rpx;
		margin-left: 50rpx;
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
