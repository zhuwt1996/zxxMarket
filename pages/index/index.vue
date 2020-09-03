<template>
	<view>
		<!-- 搜索框 -->
		<view class="search" :style="{width: (menuLeft-30)+'px',height: menuHeight+'px',marginTop: menuTop+'px'}" @click="searchNews">
			<icon type="search" size="10"></icon>
			<text>请输入关键词搜索</text>
		</view>
	<!-- 可拖动顶部选项卡 -->
	<u-tabs ref="tabSwiper" @change="tabChange" :current="currentIndex" :list="tabs"
	 :is-scroll="true" active-color="#df663a"></u-tabs>

	<index-home v-if="currentIndex == 0"></index-home>
	</view>
</template>

<script>
	import indexHome from "./subPages/indexHome"
	import {
		indexTabs
	} from '../../data/pageData/pageData.js'
	export default {
		components: {
			indexHome
		},

		data() {
			return {
				tabs: [],
				currentIndex: 0,
				menuTop: 0,
				menuHeight: 0,
				menuLeft: 0,
			}
		},

		onLoad() {
			this.tabs = indexTabs
			// 获取胶囊按钮的位置
			let menuButtonPosition = uni.getMenuButtonBoundingClientRect()
			this.menuTop = menuButtonPosition.top
			this.menuHeight = menuButtonPosition.height
			this.menuLeft = menuButtonPosition.left
		},

		methods: {
			tabChange(index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		// position: absolute;
		border-radius: 20rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		background-color: #f5f5f5;
		padding-left: 20rpx;
		margin-left: 30rpx;
		text {
			font-size: 10px;
			color: #C4C4C6;
			margin-left: 5px;
		}
	}
</style>
