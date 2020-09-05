// 缓存数据
function saveItem(key, data) {
	// 同步缓存
	try {
		let saveData = encodeURIComponent(JSON.stringify(data))
		uni.setStorageSync(key, saveData)
	} catch (e) {
		// 缓存失败
		console.log(e)
	}
}

// 取出缓存
function getItem(key) {
	try {
		let saveData = JSON.parse(decodeURIComponent(uni.getStorageSync(key)))
		return saveData
	} catch (e) {
		console.log('缓存获取失败')
	}
}

// 清除指定key的缓存
function removeItem(key) {
	try {
		uni.removeStorageSync(key)
	} catch {
		// 清除缓存失败
		console.log(e)
	}
}

export default {
	saveItem,
	getItem,
	removeItem
}
