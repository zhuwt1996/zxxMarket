<template>
	<view style="background-color: #F5F5F5;min-height: 100%;position: absolute;width: 100%;">
		<view class="mineHeader">
			<view class="loginView">
				<view v-if="!isLogin" class="loginText" @click="goToLogin">
					<text class="entry">登录/注册</text>
					<text class="tip">点击登录 即可查看详细内容</text>
				</view>
				<view v-if="isLogin" class="loginText" @click="goToUserInfo">
					<text class="entry">{{userInfo.userName}}</text>
					<text class="tip">{{userInfo.userPhone}}</text>
				</view>
				<image :src="userInfo.avatar" @click="avatarOnClick"></image>
			</view>
		</view>
		<view class="floatHeader">
			<view class="floatHeaderItem" @click="goTo404">
				<image src="../../static/mine/sc.png"></image>
				<text>收藏夹</text>
			</view>
			<view class="floatHeaderItem" @click="goTo404">
				<image src="../../static/mine/gzdp.png"></image>
				<text>关注店铺</text>
			</view>
			<view class="floatHeaderItem" @click="goTo404">
				<image src="../../static/mine/zj.png"></image>
				<text>足迹</text>
			</view>
			<view class="floatHeaderItem" @click="goTo404">
				<image src="../../static/mine/hb.png"></image>
				<text>红包卡券</text>
			</view>
		</view>
		<view class="myOrder">
			<view class="orderItem" @click="goTo404">
				<image src="../../static/mine/dfk.png"></image>
				<text>待付款</text>
			</view>
			<view class="orderItem" @click="goTo404">
				<image src="../../static/mine/dfh.png"></image>
				<text>待发货</text>
			</view>
			<view class="orderItem" @click="goTo404">
				<image src="../../static/mine/dsh.png"></image>
				<text>待收货</text>
			</view>
			<view class="orderItem" @click="goTo404">
				<image src="../../static/mine/pj.png"></image>
				<text>评价</text>
			</view>
			<view class="orderItem" @click="goTo404">
				<image src="../../static/mine/sh.png"></image>
				<text>退款/售后</text>
			</view>
		</view>
		<uni-list :border="false">
			<uni-list-item title="收货地址"  thumb="../../static/mine/dz.png" thumbSize="sm" clickable link to="/pages/address/address"  showArrow class="listItem" />
			<uni-list-item title="主题切换"  thumb="../../static/mine/zt.png" thumbSize="sm" clickable link showArrow class="listItem" />
			<uni-list-item title="清理缓存" thumb="../../static/mine/qlhc.png" thumbSize="sm" clickable link showArrow class="listItem" />
			<uni-list-item title="关于ZxxMarket" thumb="../../static/mine/gy.png" thumbSize="sm" clickable link showArrow class="listItem" />
		</uni-list>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from "vuex";
	export default {
		data() {
			return {}
		},
		computed: {
			...mapState( [ "userInfo" ] ),
			...mapGetters( [ "isLogin" ] )
		},
		methods: {
			
			goTo404() {
			// 	uni.navigateTo( {
			// 		url: '../common/404Page'
			// 	} )
			},
			goToLogin() {
			// 	uni.navigateTo( {
			// 		url: './module/login/login'
			// 	} )
			},
			goToUserInfo() {
			// 	uni.navigateTo( {
			// 		url: './module/userInfo/userInfo'
			// 	} )
			},
			avatarOnClick() {
			// 	if (this.isLogin) {
			// 		uni.navigateTo( {
			// 			url: './module/userInfo/userInfo'
			// 		} )
			// 	}else {
			// 		uni.navigateTo( {
			// 			url: './module/login/login'
			// 		} )
			// 	}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mineHeader {
		width: 100%;
		height: 450rpx;
		background: #FFFFFF url(../../static/mine/mineBanner.png) no-repeat;
		padding-top: 150rpx;
	
		.loginView {
			height: 240rpx;
			padding: 0 32rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
	
			.loginText {
				display: flex;
				flex-direction: column;
	
				.entry {
					font-size: 40rpx;
					color: #FFFFFF;
				}
	
				.tip {
					margin-top: 10rpx;
					font-size: 24rpx;
					color: #FFFFFF;
				}
			}
	
			image {
				width: 156rpx;
				height: 156rpx;
				border-radius: 50%;
			}
		}
	
	}
	
	.floatHeader {
		margin: -50rpx 30rpx 16rpx;
		height: 80px;
		background-color: #FFFFFF;
		border-radius: 6px;
		display: flex;
		flex-direction: row;
	
		.floatHeaderItem {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 25%;
	
			image {
				width: 60rpx;
				height: 60rpx;
			}
	
			text {
				font-size: 12px;
				color: #666666;
			}
		}
		
	}
	
	.myOrder {
		margin: 30rpx 0;
		height: 160rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
	
		.orderItem {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 25%;
			image {
				width: 60rpx;
				height: 60rpx;
			}
	
			text {
				font-size: 12px;
				color: #666666;
			}
		}
		
	} 
	
	.listItem {
		height: 45px;
		border-bottom: 1px solid #EEEEEE;
	}
	
	.redDot {
		width: 15rpx;
		height: 15rpx;
		background-color: red;
		border-radius: 50%;
	}
</style>
