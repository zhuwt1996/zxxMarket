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
			<view class="stickyView">
				<label v-for="v in stickList" :key="v">{{v}}</label>
			</view>
		</u-sticky>
		<!-- 瀑布流 -->
		<view>
			<u-waterfall v-model="flowList" ref="uWaterfall">
				<template v-slot:left="{ leftList }">
					<view style="border-radius: 8px;margin: 5px;background-color: #ffffff;padding: 8px;position: relative;"
					 v-for="(item, index) in leftList" :key="index">
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
							<view style="color: #ffffff;display: flex;align-items: center;padding: 4rpx 14rpx;border-radius: 50rpx;
														font-size: 20rpx;
														line-height: 1;">自营</view>
							<view style="margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;">放心购</view>
						</view>
						<view style="font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;">{{ item.shop }}</view>
					</view>
				</template>
				<template v-slot:right="{ rightList }">
					<view style="border-radius: 8px;margin: 5px;background-color: #ffffff;padding: 8px;position: relative;"
					 v-for="(item, index) in rightList" :key="index">
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
							<view style="color: #ffffff;display: flex;align-items: center;padding: 4rpx 14rpx;border-radius: 50rpx;
														font-size: 20rpx;
														line-height: 1;">自营</view>
							<view style="margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;">放心购</view>
						</view>
						<view style="font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;">{{ item.shop }}</view>
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
	import wtFlow from '../../../components/wtFlow/wtFlow.vue'

	export default {

		components: {
			wtFlow
		},

		data() {
			return {
				swiperImgs: swiperImgs,
				chanels: chanelList,
				stickList: ['全部', '直播', '便宜好货', '买家秀'],
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					}
				]
			}
		},

		props: {
			offsetTop: {
				type: Number,
				default: 0
			}
		},

		created() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000);
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
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
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

	.stickyView {
		display: flex;
		flex-direction: row;
		z-index: 10;
		background-color: #F5F5F5;

		label {
			width: 25%;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}


	// .demo-warter {
	// 	border-radius: 8px;
	// 	margin: 5px;
	// 	background-color: #ffffff;
	// 	padding: 8px;
	// 	position: relative;
	// }


	// .demo-tag-owner {
	// 	background-color: $u-type-error;
	// 	color: #ffffff;
	// 	display: flex;
	// 	align-items: center;
	// 	padding: 4rpx 14rpx;
	// 	border-radius: 50rpx;
	// 	font-size: 20rpx;
	// 	line-height: 1;
	// }

	// .demo-tag-text {
	// 	border: 1px solid $u-type-primary;
	// 	color: $u-type-primary;
	// 	margin-left: 10px;
	// 	border-radius: 50rpx;
	// 	line-height: 1;
	// 	padding: 4rpx 14rpx;
	// 	display: flex;
	// 	align-items: center;
	// 	border-radius: 50rpx;
	// 	font-size: 20rpx;
	// }

	// .demo-price {
	// 	font-size: 30rpx;
	// 	color: $u-type-error;
	// 	margin-top: 5px;
	// }

	// .demo-shop {
	// 	font-size: 22rpx;
	// 	color: $u-tips-color;
	// 	margin-top: 5px;
	// }
</style>
