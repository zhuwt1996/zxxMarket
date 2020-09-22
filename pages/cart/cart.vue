<!-- 购物车 -->
<template>
	<view class="zxxPage">
		<view class="cartHeader">
			<label>管理</label>
			<label>| 共10件宝贝</label>
		</view>
		<view class="cartBody">
			<!-- 店铺 -->
			<view class="shop" v-for="cart in cartList" :key="cart.shopId">
				<view class="shopName">
					<image class="checkImg" src="../../static/cart/unselect.png"></image>
					<image :src="cart.shopIcon"></image>
					<label>{{cart.shopName}}</label>
					<u-icon name="arrow-right"></u-icon>
				</view>
				<!-- 商品 -->
				<view class="product" v-for="product in cart.productList" :key="product.productId">
					<image class="checkImg" src="../../static/cart/unselect.png"></image>
					<image class="productImg" :src="product.image"></image>
					<view class="productInfo">
						<label class="desc">{{product.title}}</label>
						<view class="type">
							<label>{{product.types}}</label>
							<u-icon name="arrow-down"></u-icon>
						</view>
						<view class="priceAndNum">
							<label>¥{{product.price}}</label>
							<u-number-box v-model="product.num" @change="numBoxChange" :min="1"></u-number-box>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		data() {
			return {
				checked: false,
				productNum: 1,
				// cartList: [{
				// 	shopId: 'abcd1234',
				// 	shopName: '万水千山总是情',
				// 	shopIcon: '../../static/index/channelIcons/icon1.png',
				// 	productList: [{
				// 		productId: '0000',
				// 		img: '../../static/logo.png',
				// 		desc: '莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情',
				// 		type: '粉红+41',
				// 		price: 89,
				// 		num: 1
				// 	},{
				// 		productId: '0001',
				// 		img: '../../static/logo.png',
				// 		desc: '莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情',
				// 		type: '粉红+41',
				// 		price: 89,
				// 		num: 1
				// 	},{
				// 		productId: '0002',
				// 		img: '../../static/logo.png',
				// 		desc: '莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情',
				// 		type: '粉红+41',
				// 		price: 89,
				// 		num: 1
				// 	}]
				// },{
				// 	shopId: 'abcd1235',
				// 	shopName: '万水千山总是情',
				// 	shopIcon: '../../static/index/channelIcons/icon1.png',
				// 	productList: [{
				// 		productId: '0009',
				// 		img: '../../static/logo.png',
				// 		desc: '莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情；莫说千山多障碍，风也急风也劲，白云过山峰也可传情',
				// 		type: '粉红+41',
				// 		price: 89,
				// 		num: 1
				// 	}]
				// }]
			}
		},
		
		computed: {
		        ...mapState(["cartList"])
		    },

		methods: {
			numBoxChange(e) {
				console.log('当前值为: ' + e.value)
			},
		}

	}
</script>

<style lang="scss" scoped>
	.cartHeader {
		background-color: #FFFFFF;
		display: flex;
		justify-content: flex-end;
		height: 100rpx;
		align-items: center;

		padding-right: 30rpx:nth-child(1) {
			font-size: 32rpx;
			margin-right: 10rpx;
		}

		:nth-child(2) {
			font-size: 24rpx;

		}
	}

	.cartBody {
		padding: 20rpx;

		.shop {
			padding: 20rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin-bottom: 30rpx;
			.shopName {
				height: 80rpx;
				display: flex;
				align-items: center;

				image:nth-child(2) {
					width: 50rpx;
					height: 50rpx;
					margin-right: 10rpx;
				}

				label {
					font-size: 32rpx;
				}
			}

			.product {
				display: flex;
				align-items: center;
				padding: 10px 0;

				.productImg {
					width: 180rpx;
					height: 180rpx;
					margin-right: 20rpx;
				}

				.productInfo {
					flex: 1;
					display: flex;
					flex-direction: column;

					.desc {
						// 最多显示两行，多余以省略号表示
						font-size: 28rpx;
						// 设置展示两行且超出部分以省略号的形式展示
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical; //从上到下排列子元素;
						-webkit-line-clamp: 2; //设置文本显示两行
					}

					.type {
						margin: 10rpx 0;
						padding: 0 10rpx;
						height: 50rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						background-color: #F5F5F5;

						label {
							flex: 1;
						}
					}

					.priceAndNum {
						display: flex;
						justify-content: space-between;
						height: 50rpx;
						align-items: center;

						label:nth-child(1) {
							color: #df663a;
							font-size: 32rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
	}

	.checkImg {
		margin-right: 30rpx;
		width: 40rpx;
		height: 40rpx;
	}
</style>
