<template>
	<view class="tabs">
		<!-- 可拖动顶部选项卡 -->
		<u-tabs ref="tabSwiper" @change="tabChange" :current="currentIndex" :list="list"
		 :is-scroll="true" active-color="#df663a"></u-tabs>

		<index-home v-if="currentIndex == 0"></index-home>
	</view>
</template>

<script>
	import indexHome from "./subPages/indexHome"
	export default {
		components: {
			indexHome
		},

		data() {
			return {
				list: [ {
						name: '首页'
					}, {
						name: '手机'
					}, {
						name: '百货'
					},
					{
						name: '女装'
					},
					{
						name: '医药'
					},
					{
						name: '数码'
					},
					{
						name: '生活用品'
					},
					{
						name: '箱包'
					},
				],
				currentIndex: 0
			}
		},

		onLoad() {},

		methods: {
			tabChange( index ) {
				this.currentIndex = index
			}
		}
	}
</script>

<style>

</style>
