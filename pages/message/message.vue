<!-- 消息页 -->
<template>
	<view class="message">
		<view class="unRead">
			<label style="margin-right: 20rpx;">12条未读信息</label>
			<label>
				<u-icon name="trash" style="margin-right: 6rpx;"></u-icon>清除未读
			</label>
		</view>
		<view class="floatArea">
			<view class="item">
				<image src="../../static/logo.png"></image>
				<label>交易物流</label>
			</view>
			<view class="item">
				<image src="../../static/logo.png"></image>
				<label>活动优惠</label>
			</view>
		</view>
		<view class="msgList">
			<u-swipe-action :show="msg.show" :index="index" v-for="(msg, index) in msgList"
			 :key="index" @click="click" :options="options" :btn-width="120">
				<view class="msgItem">
					<image src="../../static/logo.png"></image>
					<view class="subDesc">
						<label class="name">{{msg.shopName}}</label>
						<label class="msg">{{msg.content}}</label>
					</view>
					<view class="footer">
						<label class="time">9:55</label>
						<label class="badge">
							<image src="../../static/message/unalarm.png"></image>
							<u-badge type="error" count="7" :absolute="false" size="mini"></u-badge>
						</label>
					</view>
				</view>
			</u-swipe-action>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList: [{
					shopName: '阿迪巴斯官方旗舰店',
					content: '[21条]擦时不可及诶材料及从事阿是从哪哦擦撒擦擦色无奈离开你国防部表示将对彼此',
					show: false
				}, {
					shopName: '阿迪巴斯官方旗舰店',
					content: '[21条]擦时不可及诶材料及从事阿是从哪哦擦撒擦擦色无奈离开你国防部表示将对彼此',
					show: false
				}, {
					shopName: '阿迪巴斯官方旗舰店',
					content: '[21条]擦时不可及诶材料及从事阿是从哪哦擦撒擦擦色无奈离开你国防部表示将对彼此',
					show: false
				}, {
					shopName: '阿迪巴斯官方旗舰店',
					content: '[21条]擦时不可及诶材料及从事阿是从哪哦擦撒擦擦色无奈离开你国防部表示将对彼此',
					show: false
				}],
				options: [{
						text: '标为已读',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			}
		},
		methods: {
			// listIndex: 列表的索引  swiperIndex：滑块的索引
			click(listIndex, swiperIndex) {
				if (swiperIndex == 1) {
					this.$u.toast('删除成功');
				} else {
					this.$u.toast(`标为已读成功`);
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		min-height: 100%;
		background-color: #fafafa;
		width: 100%;
		position: absolute;
	}

	.unRead {
		display: flex;
		flex-direction: row;
		color: #606266;
		margin-top: 20rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
	}

	.floatArea {
		display: flex;
		flex-direction: row;
		margin: 20rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		border-bottom: 8rpx solid #f4f4f4;

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: 50%;
			padding: 30rpx 0;

			image {
				border-radius: 50%;
				margin-right: 10rpx;
				width: 80rpx;
				height: 80rpx;
			}
		}
	}

	.msgList {
		padding: 0 20rpx;
		background-color: #FFFFFF;

		.msgItem {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 15rpx 0;
			border-bottom: 1rpx solid #F4F4F5;

			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}

			.subDesc {
				flex: 1;
				display: flex;
				flex-direction: column;

				.name {
					font-size: 28rpx;
					color: #000000;
					margin-bottom: 10rpx;
				}

				.msg {
					font-size: 20rpx;
					color: #606266;
					width: 500rpx;
					overflow: hidden;
					display: inline-block;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}

			.footer {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;

				.time {
					color: #606266;
				}

				.badge {
					display: flex;
					justify-content: space-between;
					align-items: center;

					image {
						width: 20rpx;
						height: 20rpx;
					}
				}
			}
		}
	}

	.msgItem:last-child {
		border-bottom: none;
	}
</style>
