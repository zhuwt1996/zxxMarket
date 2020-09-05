import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex)

const state = {	
	address: '定位中...',// 地址
	avatar: 'https://s1.ax1x.com/2020/08/31/dXKwGT.png' ,//头像
	userId: '', 
	userInfo: {
		userId: '',
		avatar: 'https://s1.ax1x.com/2020/09/01/dv7iss.jpg' ,//头像
		userName: '',
		userDesc: '',
		userPhone: ''
	}
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