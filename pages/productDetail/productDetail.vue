<!-- 商品详情页 -->
<template>
	<view class="zxxPage">
		<!-- 轮播图展示 -->
		<swiper style="height: 600rpx;" :circular="true" :indicator-dots="true"
		 :autoplay="true" :interval="3000" :duration="300">
			<swiper-item v-for="(v,k) in productDeatil.previewer_list" :key="k">
				<image class="swiperImg" :src="v.src"></image>
			</swiper-item>
		</swiper>
		<!-- 商品描述/价格 -->
		<view class="productInfo">
			<label class="price">¥{{productDeatil.price}}</label>
			<label class="desc">{{productDeatil.title}}</label>
		</view>
		<!-- 商品类型 -->
		<view class="productNum" @click="popProductSelector">
			<label>请选择商品类型</label>
			<label>{{activeTags.join('+')}} <u-icon name="arrow-right"></u-icon></label>
		</view>
		<!-- 选择商品数量 -->
		<view class="productNum">
			<label>请选择商品数量</label>
			<u-number-box v-model="productDeatil.num" @change="numBoxChange" :min="1"></u-number-box>
		</view>
		<!-- 底部购买按钮 -->
		<view class="productDetailFooter">
			<view class="itemList">
				<view class="item">
					<image src="../../static/productDeatil/shop_light.png"></image>
					<span>店铺</span>
				</view>
				<view class="item">
					<image src="../../static/productDeatil/wang.png"></image>
					<span>客服</span>
				</view>
				<view class="item">
					<image src="../../static/productDeatil/like.png"></image>
					<span>收藏</span>
				</view>
			</view>

			<view class="footerBtns">
				<button @click="addCart">加入购物车</button>
				<button>立即购买</button>
			</view>
		</view>
		<!-- 图片预览 -->
		<!-- 商品属性选择底部弹框 -->
		<u-popup v-model="showPop" mode="bottom" border-radius="30">
			<view class="productSelect">
				<view class="selects" v-for="(v,k) in productProps" :key="k">
					<label>{{v.title}}</label>
					<view class="options">
						<label v-for="(option,index) in v.options" :key="index" :class="option == activeTags[k]? 'activeOption':'option' "
						 @click="handleTagSelect(k,option)">{{option}}</label>
					</view>
				</view>
				<button @click="showPop = false">确 定</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { mapMutations } from "vuex";
	export default {
		data() {
			return {
				
				
				showPop: false,
				activeTags:[],
				productProps: [{
					title: '颜色',
					options: ['粉红', '黑白', '黄蓝', '紫色', '纯黑', '纯白', '五彩斑斓的黑', '白天不懂夜的黑']
				}, {
					title: '尺码',
					options: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
						'46以上建议剁脚'
					]
				}],
				activeStyle: {
					color: '#FFFFFF',
					backgroundColor: '#fc5220'
				},
				productDeatil: {
					num: 1
				} 
			}
		},
		
		onLoad(e) {
			this.productDeatil = JSON.parse(decodeURIComponent(e.product)) 
			console.log('this.productDeatil',JSON.parse(JSON.stringify(this.productDeatil)))
		},

		methods: {
			...mapMutations(["ADD_CART"]),
			
			numBoxChange(e) {
				console.log('当前值为: ' + e.value)
			},
			popProductSelector() {
				this.showPop = true
			},
			handleTagSelect(tagIndex, option) {
				this.$set(this.activeTags,tagIndex,option)
			},
			addCart() {
				if (this.activeTags.length == 0) {
					uni.showToast({
						title: "请先选择商品类型"
					})
					return
				}
				this.productDeatil = {
					...this.productDeatil,
					types: this.activeTags.toString()
				}
				console.log('this.productDeatil======',this.productDeatil)
				this.ADD_CART(this.productDeatil)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiperImg {
		width: 100%;
		height: 100%;
	}

	.productInfo {
		display: flex;
		flex-direction: column;
		padding: 30rpx 20rpx;
		margin: 30rpx 0;
		background-color: #FFFFFF;

		.desc {
			font-size: 26rpx;
		}

		.price {
			font-size: 36rpx;
			font-weight: bold;
			color: red;
		}
	}

	.productNum {
		display: flex;
		padding: 0 30rpx;
		height: 80rpx;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		margin: 30rpx 0;
	}

	.productDetailFooter {
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0;
		height: 120rpx;
		width: 100%;
		z-index: 10;
		background-color: white;

		.itemList {
			width: 40%;
			display: flex;
			justify-content: space-between;
			padding: 0 20rpx;

			.item {
				display: flex;
				flex-direction: column;
				font-size: 24rpx;
				align-items: center;
				justify-content: center;

				image {
					width: 20px;
					height: 20px;
				}
			}
		}

		.footerBtns {
			flex: 1;
			font-size: 0;
			display: flex;
			flex-direction: row;
			align-items: center;

			button {
				height: 30px;
				width: 50%;
				font-size: 12px;
				border: none;
				color: white;
				outline: none;
				border-radius: 0;
			}

			:nth-child(1) {
				background-color: #fd9c29;
				border-top-left-radius: 15px;
				border-bottom-left-radius: 15px;
			}

			:nth-child(2) {
				background-color: #fc5220;
				border-top-right-radius: 15px;
				border-bottom-right-radius: 15px;
			}
		}
	}

	.productSelect {
		padding: 30rpx;

		.selects {
			display: flex;
			flex-direction: column;

			>label {
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: 30rpx;
			}

			.options {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				label {
					margin-right: 20rpx;
					margin-bottom: 20rpx;
					padding: 10rpx 40rpx;
				}

				.option {
					background-color: #F5F5F5;
				}
				.activeOption {
					color: #FFFFFF;
					background-color: #fc5220;
				}
			}
		}

		button {
			margin-top: 60rpx;
			margin-right: 30rpx;
			width: 260rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 40rpx;
			font-size: 24rpx;
			color: #FFFFFF;
			background-color: #fc5220;
		}
	}

	
</style>
