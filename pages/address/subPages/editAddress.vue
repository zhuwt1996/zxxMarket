<!-- 新增/编辑地址 -->
<template>
	<view>
		<button @click="addrListShow=true">showCity</button>
			<u-select v-model="addrListShow" mode="mutil-column-auto" :list="cityDataSource" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	import {cityList} from '../../../data/pageData/pageData.js';
	export default {
		data() {
			return {
				addrListShow: false,
				cityDataSource: cityList
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
