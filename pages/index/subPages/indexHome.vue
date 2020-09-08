<template>
	<view>
		<!-- 轮播图 -->
		<swiper style="height: 300rpx;" :circular="true" :indicator-dots="true"
		 :autoplay="true" :interval="3000" :duration="300">
			<swiper-item v-for="v in swiperImgs" :key="v.url">
				<image class="swiperImg" :src="v.url"></image>
			</swiper-item>
		</swiper>
		<!-- 栏目 -->
		<view class="channelView">
			<view class="chanelColumn" v-for="(chanelColumn,k) in chanels" :key="k">
				<view v-for="icon in chanelColumn.iconList" :key="icon.img" class="chanel">
					<image :src="icon.img"></image>
					<label>{{icon.title}}</label>
				</view>
			</view>
		</view>
		<!-- 吸顶 -->
		<u-sticky :offset-top="offsetTop">
			<u-tabs ref="stickyTab" @change="tabChange" :current="currentIndex" :list="tabs"
			 active-color="#df663a" :is-scroll="false"></u-tabs>
		</u-sticky>
		<!-- 瀑布流，以下css写到class中无效，待改进 -->
		<view style="padding:0 10rpx;background-color: #F5F5F5;">
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{ leftList }">
					<view style="border-radius: 8px;margin: 5px;background-color: #ffffff;padding: 8px;position: relative;"
					 v-for="(item, index) in leftList" :key="index" @click="goToProductDetail">
						<!-- 警告：微信小程序不支持嵌入lazyload组件，请自行如下使用image标签 -->
						<!-- #ifndef MP-WEIXIN -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image"
						 :index="index"></u-lazy-load>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN -->
						<view>
							<image style="width: 100%;border-radius: 4px;" :src="item.image" mode="widthFix"></image>
						</view>
						<!-- #endif -->
						<view style="font-size: 30rpx;margin-top: 5px;">{{ item.title }}</view>
						<view style="font-size: 30rpx;margin-top: 5px;">{{ item.price }}元</view>
						<view style="display: flex;margin-top: 5px;">
							<view style="display: flex;align-items: center;padding: 4rpx 14rpx;border-radius: 50rpx;
														font-size: 20rpx;line-height: 1;border: 1px solid #df663a;">自营</view>
							<view style="margin-left: 10px;border-radius: 50rpx;line-height: 1;padding: 4rpx 14rpx;
														display: flex;align-items: center;border-radius: 50rpx;border: 1px solid #df663a;
														font-size: 20rpx;">放心购</view>
						</view>
						<view style="font-size: 22rpx;margin-top: 5px;">{{ item.shop }}</view>
					</view>
				</template>
				<template v-slot:right="{ rightList }">
					<view style="border-radius: 8px;margin: 5px;background-color: #ffffff;padding: 8px;position: relative;"
					 v-for="(item, index) in rightList" :key="index" @click="goToProductDetail">
						<!-- #ifndef MP-WEIXIN -->
						<u-lazy-load threshold="-450" border-radius="10" :image="item.image"
						 :index="index"></u-lazy-load>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN -->
						<view>
							<image style="width: 100%;border-radius: 4px;" :src="item.image" mode="widthFix"></image>
						</view>
						<!-- #endif -->
						<view style="font-size: 30rpx;margin-top: 5px;">{{ item.title }}</view>
						<view style="font-size: 30rpx;margin-top: 5px;">{{ item.price }}元</view>
						<view style="display: flex;margin-top: 5px;">
							<view style="display: flex;align-items: center;padding: 4rpx 14rpx;border-radius: 50rpx;
														font-size: 20rpx;line-height: 1;border: 1px solid #df663a;">自营</view>
							<view style="margin-left: 10px;border: 1px solid #df663a;border-radius: 50rpx;line-height: 1;
							padding: 4rpx 14rpx;display: flex;align-items: center;border-radius: 50rpx;
							font-size: 20rpx;">放心购</view>
						</view>
						<view style="font-size: 22rpx;margin-top: 5px;">{{ item.shop }}</view>
						<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
						<!-- <u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close"
						 @click="remove(item.id)"></u-icon> -->
					</view>
				</template>
			</u-waterfall>
			<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		</view>
	</view>
	</view>
</template>

<script>
	import {
		swiperImgs,
		chanelList
	} from '../../../data/pageData/pageData.js'
	import {
		recommandProducts
	} from '../../../data/responseData/responseData.js'

	export default {

		data() {
			return {
				swiperImgs: swiperImgs,
				chanels: chanelList,
				currentIndex: 0,
				tabs: [{
					name: '全部'
				}, {
					name: '直播'
				}, {
					name: '便宜好货'
				}, {
					name: '买家秀'
				}],
				stickList: ['全部', '直播', '便宜好货', '买家秀'],
				// loadStatus: 'loadmore',
				flowList: [],
				list: recommandProducts
			}
		},

		props: {
			offsetTop: {
				type: Number,
				default: 0
			},
			loadStatus: {
				type: String,
				default: 'loadmore'
			},
		},

		created() {
			this.addRandomData();
		},


		methods: {
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]));
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			// remove(id) {
			// 	this.$refs.uWaterfall.remove(id);
			// },
			tabChange(index) {
				this.currentIndex = index
			},

			goToProductDetail() {
				// 直接在当前页无法跳转
				this.$emit('goToProductDetail')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiperImg {
		width: 100%;
		height: 100%;
	}

	.channelView {
		overflow-x: auto;

		.chanelColumn {
			display: flex;
			flex-direction: row;

			.chanel {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				height: 120rpx;
				min-width: 20%;

				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
	}

	// 滚动条整体样式
	.channelView::-webkit-scrollbar {
		// 高宽分别对应横竖滚动条的尺寸
		// width: 0px;
		height: 4px;
	}

	// 滚动条里面小方块
	.channelView::-webkit-scrollbar-thumb {
		border-radius: 10px;
		// 滚动条的颜色
		background: orange;
	}

	// 滚动条里面轨道
	.channelView::-webkit-scrollbar-track {
		margin: 0px 165px;
		border-radius: 10px;
		background: #ededed;
	}
</style>
