<script>
	import { mapMutations } from "vuex";
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.INIT_LOGINSTATUS()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(["INIT_LOGINSTATUS"]),
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	.commonPage {
		padding: 0 30rpx;
	}
	.zxxPage {
		background-color: #F5F5F5;
		width: 100%;
		min-height: 100%;
		position: absolute;
	}
</style>
