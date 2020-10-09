<!-- 微淘 -->
<template>
	<view class="vTao">
		<view class="vTaoHeader">
			<view class="item" v-for="(tab,index) in tabs" :key="index" @click="tabClick(index)">
				<label :class="activeIndex == index? 'activeTab':''">{{tab.title}}</label>
				<label :class="activeIndex == index? 'activeSubTab':''">{{tab.subTitle}}</label>
			</view>
		</view>
		<view class="visitMost">
			<label>常访问的账号</label>
			<view class="scorllView">
				<view class="account" v-for="k in [0,1,2,3,4,5,6,7,8]" :key="k">
					<image src="../../static/logo.png"></image>
					<label>阿迪拔丝官方旗舰店</label>
				</view>
			</view>
		</view>
		<view class="moment">
			<view class="momentHeader">
				<image src="../../static/logo.png"></image>
				<view class="shop">
					<label>NewBalance官方旗舰店</label>
					<label>官方品牌店&nbsp;&nbsp;&nbsp;&nbsp;10-05</label>
				</view>
				<view class="goShop">
					<image src="../../static/cart/select.png"></image>
					<label>进店</label>
				</view>
				<u-icon name="arrow-down"></u-icon>
			</view>
			<view class="content">
				<label><label>上新</label>[NB跑鞋推荐]NB跑鞋炸裂开售；全新hhh科技来袭，稳定的反弹性能带给你全新的跑步体验。NB跑鞋炸裂开售；全新hhh科技来袭，稳定的反弹性能带给你全新的跑步体验。</label>
			</view>
			<view class="imgs">
				<image v-for="(img,k) in imageList" :key="k" :src="img" :class="imgClass"
				 :mode="imageList.length == 1 ? 'widthFix':'scaleToFill'" @click="previewImg(img,k)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				tabs: [{
					title: '关注',
					subTitle: '最新动态'
				}, {
					title: '上新',
					subTitle: '新品首发'
				}, {
					title: '直播',
					subTitle: '主播在线'
				}, {
					title: '种草',
					subTitle: '精选好物'
				}, {
					title: '福利',
					subTitle: '粉丝活动'
				}],
				imageList: ['https://s1.ax1x.com/2020/05/29/tm6RMD.jpg',
					'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					'https://s1.ax1x.com/2020/06/14/tzGSbR.jpg',
					'https://s1.ax1x.com/2020/06/15/N9cDFP.jpg',
					'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
				]
			}
		},
		computed: {
			imgClass() {
				if (this.imageList.length == 1) {
					return 'onePic'
				} else if (this.imageList.length == 4) {
					return 'fourPic'
				} else {
					return 'gridPic'
				}
			}
		},
		methods: {
			tabClick(index) {
				this.activeIndex = index
			},
			previewImg(imgPath, index) {
				console.log('imgPath ===> ' + imgPath)
				uni.previewImage({
					urls: this.imageList,
					current: index,

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vTao {
		background-color: #F5F5F5;
		min-height: 100%;
		width: 100%;
		position: absolute;
	}

	.vTaoHeader {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
		position: fixed;
		width: 100%;
		background-color: #F5F5F5;
		z-index: 10;

		.item {
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-right: 1rpx solid #f5f5f5;

			:nth-child(1) {
				font-size: 32rpx;
			}

			:nth-child(2) {
				font-size: 24rpx;
			}
		}
	}

	.activeTab {
		color: $highlight-color;
	}

	.activeSubTab {
		color: #FFFFFF;
		background-color: $highlight-color;
		border-radius: 28rpx;
		padding: 0 10rpx;
	}

	.visitMost {
		margin: 125rpx 20rpx 20rpx;
		padding: 20rpx 20rpx 0;
		background-color: #FFFFFF;
		border-radius: 12rpx;

		.scorllView {
			display: flex;
			flex-direction: row;
			overflow-x: scroll;

			.account {
				width: 20%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 20rpx;
				padding-bottom: 20rpx;

				image {
					border-radius: 50%;
					width: 80rpx;
					height: 80rpx;
				}

				label {
					width: 100%;
					overflow: hidden;
					display: inline-block;
					white-space: nowrap;
					text-overflow: ellipsis;
					text-align: center;
					font-size: 24rpx;
					margin-top: 10rpx;
				}
			}
		}
	}

	// 滚动条整体样式
	.scorllView::-webkit-scrollbar {
		// 高宽分别对应横竖滚动条的尺寸
		// width: 0px;
		height: 4px;
	}

	// 滚动条里面小方块
	.scorllView::-webkit-scrollbar-thumb {
		border-radius: 10px;
		// 滚动条的颜色
		background: orange;
	}

	// 滚动条里面轨道
	.scorllView::-webkit-scrollbar-track {
		margin: 0px 300rpx;
		border-radius: 10px;
		background: #ededed;
	}

	.moment {
		margin: 0 20rpx;
		padding: 20rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;

		.momentHeader {
			display: flex;
			align-items: center;

			>image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				margin-right: 15rpx;
			}

			.shop {
				display: flex;
				flex-direction: column;

				flex: 1:nth-child(2) {
					font-size: 20rpx;
					color: #989898;
				}
			}

			.goShop {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				padding: 0 10rpx;
				border: 1rpx solid $highlight-color;
				border-radius: 20rpx;
				margin: 0 15rpx;

				image {
					width: 30rpx;
					height: 30rpx;
					margin-right: 10rpx;
				}

				label {
					color: $highlight-color;
				}
			}
		}

		.content {
			margin-top: 20rpx;

			label {
				font-size: 28rpx;

				label {
					margin-right: 15rpx;
					font-size: 20rpx;
					padding: 0 10rpx;
					color: #FFFFFF;
					background-color: $highlight-color;
					border-radius: 20rpx;
				}
			}
		}

		.imgs {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin-top: 15rpx;

			image {
				margin-bottom: 10rpx;
				margin-right: 10rpx;
			}
		}
	}

	.onePic {
		width: 50%;
	}

	.fourPic {
		width: 31%;
		height: 220rpx;

		&:nth-child(2) {
			margin-right: 100rpx !important;
		}
	}

	.gridPic {
		width: 31%;
		height: 220rpx;
	}
</style>
