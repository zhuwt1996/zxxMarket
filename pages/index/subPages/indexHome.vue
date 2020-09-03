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
		<!-- 瀑布流 -->
	</view>
</template>

<script>
	import {
		swiperImgs,
		chanelList
	} from '../../../data/pageData/pageData.js'
	export default {
		data() {
			return {
				swiperImgs: swiperImgs,
				chanels: chanelList
			}
		},
		
		created() {
			console.log('1111111')
			this.chanels = chanelList
			console.log('this.chanels',this.chanels)
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
