<template>
	<view>
		<u-swipe-action :show="addr.show" :index="index" v-for="(addr, index) in reciveAddrList" :key="index" @click="click"
		 :options="options">
			<view class="addressCell" @click="editAddr(addr,index)">
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
		</u-swipe-action>
		<button class="newAddrBtn" @click="addAddress">
			<u-icon name="plus" style="margin-right: 15rpx;"></u-icon>添加收货地址
		</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		data() {
			return {
				options: [{
						text: '收藏',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			}
		},

		computed: {
			...mapState(["reciveAddrList"])
		},

		methods: {
			...mapMutations(["REMOVE_RECIVEADDRESS"]),
			addAddress() {
				uni.navigateTo({
					url: './subPages/editAddress'
				})
			},
			editAddr(addr, index) {
				uni.navigateTo({
					url: './subPages/editAddress?addr=' + encodeURIComponent(JSON.stringify(addr)) + '&editIndex=' + index
				})
			},
			// listIndex: 列表的索引  swiperIndex：滑块的索引
			click(listIndex, swiperIndex) {
				if (swiperIndex == 1) {
					this.REMOVE_RECIVEADDRESS(listIndex)
					this.$u.toast('删除成功');
				} else {
					this.reciveAddrList[listIndex].show = false;
					this.$u.toast(`收藏成功`);
				}
			},

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
