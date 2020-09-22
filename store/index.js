import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex)

const state = {	
	address: '定位中...',// 地址
	userInfo: {
		userId: '',
		avatar: 'https://s1.ax1x.com/2020/09/06/weMwk9.png' ,//头像
		userName: '',
		userDesc: '',
		userPhone: ''
	},
	cartList: []
}

const getters = {
	isLogin(state) {
		return state.userInfo.userId.length > 0
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})