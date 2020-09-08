<!-- 商品详情页 -->
<template>
	<view class="zxxPage">
		<!-- 轮播图展示 -->
		<!-- 商品描述/价格 -->
		<!-- 选择商品数量 -->
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
				<button>加入购物车</button>
				<button>立即购买</button>
			</view>
		</view>
		<!-- 图片预览 -->

	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
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
				font-size: 8px;
				align-items: center;
				justify-content: center;
				image {
					width: 20px;
					height: 20px;
				}
			}
		}
		

		.footerBtns {
			// border-radius: 10px; 
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
			}

			:nth-child(1) {
				background-color: #fd9c29;
				border-radius: 0;
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
			}

			:nth-child(2) {
				background-color: #fc5220;
				border-radius: 0;
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
			}
		}
	}
</style>
