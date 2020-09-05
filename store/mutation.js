import {
	SET_ADDRESS,
	SET_USERINFO,
	USER_LOGIN,
	USER_LOGOUT,
	INIT_LOGINSTATUS
} from './mutation-type.js'
import cacheTool from '../utils/cacheTool.js'

export default {
	[ SET_ADDRESS ]( state, addr ) {
		state.address = addr
	},
	[ SET_USERINFO ]( state, userInfo ) {
		console.log('SET_USERINFO',userInfo)
		state.userInfo = {
			...state.userInfo,
			...userInfo
		}
		console.log('state.userInfo',state.userInfo)
	},
	/** 
	 * 登录逻辑：
	 * 1、登录后：状态变为已登录，设置用户信息，将登录时间保存起来，获取登录状态时，需要取出登录时间，看是否已经过期
	 * 2、进入程序，取出登录状态
	 * 3、退出登录：状态变为未登录，清空用户信息
	 */
	[ USER_LOGIN ]( state, userInfo ) {
		state.userInfo = userInfo
		// state.userId = userInfo.userId
		cacheTool.saveItem( 'userInfo', userInfo )
		cacheTool.saveItem( 'loginTime', new Date().getTime() )
	},

	[ USER_LOGOUT ]( state ) {
		// state.userId = ''
		state.userInfo = {
			userId: '',
			avatar: 'https://s1.ax1x.com/2020/08/31/dXKwGT.png', //头像
			userName: '',
			userDesc: '',
			userPhone: ''
		}
		cacheTool.removeItem( 'loginTime' )
		cacheTool.removeItem( 'userInfo' )
	},

	[ INIT_LOGINSTATUS ]( state ) {
		
		let userInfo = cacheTool.getItem( 'userInfo' )
		console.log('userInfo',userInfo)
		// let userId = userInfo.userId
		if ( userInfo && userInfo.userId.length > 0 ) {
			// 判断登录状态是否已经失效
			// let userId = cacheTool.getItem('userId')
			let loginTime = cacheTool.getItem( 'loginTime' )
			// 设置3分钟失效
			if ( ( new Date().getTime() - loginTime ) / 1000 / 60 > 3 ) {
				uni.showToast({
					title: '登录状态已过期，请重新登录',
					icon: 'none'
				})
				userInfo = {
					userId: '',
					avatar: 'https://s1.ax1x.com/2020/08/31/dXKwGT.png', //头像
					userName: '',
					userDesc: '',
					userPhone: ''
				}
				cacheTool.removeItem( 'loginTime' )
				cacheTool.removeItem( 'userInfo' )
			}
		}else {
			userInfo = {
				userId: '',
				avatar: 'https://s1.ax1x.com/2020/09/01/dv7iss.jpg', //头像
				userName: '',
				userDesc: '',
				userPhone: ''
			}
		}
		state.userInfo = userInfo
		// state.userId = userId
	}

}
